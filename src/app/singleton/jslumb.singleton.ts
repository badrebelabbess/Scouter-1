import { ConfigApp } from '../config/config-app';

declare var jsPlumb: any;
declare var jsPlumbUtil: any;

export class JsPlumbSingleton {

    private static instance: any = jsPlumb.getInstance(
        ConfigApp.jsPlumbInstanceConfig
    );

    static getInstance(): any {
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
        return jsPlumbUtil.uuid();
    }

    private static configureJsPlumbElements(el: any) {
        JsPlumbSingleton.instance.draggable( el, { containment: true });
        // Make the div able to be draggable line from
        JsPlumbSingleton.instance.makeSource(el, ConfigApp.jsPlumbMakeSourceConfig);
        // Make the div able to be draggable line to
        JsPlumbSingleton.instance.makeTarget(el, ConfigApp.jsPlumbMakeTargetConfig);
    }

    private constructor() {
        if (JsPlumbSingleton.instance) {
            throw new Error('The JsPlumbSingleton is a singleton class and cannot be created!');
        }
        JsPlumbSingleton.instance = this;
    }

}
