import { ConfigApp } from '../config/config-app';

declare var jsPlumb: any;
declare var jsPlumbUtil: any;

// Import Jquery
import $ from 'jquery/dist/jquery';

export class JsPlumbSingleton {

    private static instance: any = jsPlumb.getInstance(
        ConfigApp.jsPlumbInstanceConfig
    );

    static getInstance(): any {
        JsPlumbSingleton.instance.bind('connection', function(info){
            // Here: conn is the only entry point to access connection information
            let conn = info.connection;
            let sourceId = conn.sourceId;
            let targetId = conn.targetId;

            let sourceType = $('#' + sourceId).text().trim();
            let targetType = $('#' + targetId).text().trim();
            // Check if the connection is legal or not and suggest the legal connection for user.
            var legalConns = JsPlumbSingleton.getLegalConns();
            if( !JsPlumbSingleton.isLegalConn(sourceType, targetType, legalConns) ){
                JsPlumbSingleton.instance.deleteConnection(conn);
                JsPlumbSingleton.suggestLegalConns(sourceType, legalConns);
            }

            alert("binding connection");
            JsPlumbSingleton.instance.deleteConnection(conn);

        });
        return JsPlumbSingleton.instance;
    }

    static initNode(elt: any): void {
        JsPlumbSingleton.configureJsPlumbElements(elt);
    }

    static configureNodes(className: string): void {
        const elts = document.querySelectorAll(className);
        JsPlumbSingleton.configureJsPlumbElements(elts);
    }

    static newId() {
        return jsPlumbUtil.uuid().substring(0, 4);
    }

    private static configureJsPlumbElements(el: any) {
        JsPlumbSingleton.instance.draggable( el, { containment: true });
        // Make the div able to be draggable line from
        JsPlumbSingleton.instance.makeSource(el, ConfigApp.jsPlumbMakeSourceConfig);
        // Make the div able to be draggable line to
        JsPlumbSingleton.instance.makeTarget(el, ConfigApp.jsPlumbMakeTargetConfig);
    }

    static isLegalConn(sourceType, targetType, legalConns){
        for( var legalConn of legalConns ){
            if( legalConn.sourceType == sourceType ){
                return legalConn.targetType.includes(targetType);
            }
        }
        return false;
    }

    static suggestLegalConns(sourceType, legalConns){
        for( var legalConn of legalConns ){
            if( legalConn.sourceType == sourceType ){
                alert( "WARNING: Illegal connection: " + sourceType + " could only be connected to: " + legalConn.targetType.join() );
            }
        }
    }

    static getLegalConns(){
        let text = JsPlumbSingleton.readStringFromFileAtPath('../../../../src/app/app-data/legal-connections.json');
        let legalConns = JSON.parse(text);
        return legalConns;
    }

    static readStringFromFileAtPath(pathOfFileToReadFrom){
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var text = request.responseText;
        return text;
    }

    private constructor() {
        if (JsPlumbSingleton.instance) {
            throw new Error('The JsPlumbSingleton is a singleton class and cannot be created!');
        }
        JsPlumbSingleton.instance = this;
    }

}
