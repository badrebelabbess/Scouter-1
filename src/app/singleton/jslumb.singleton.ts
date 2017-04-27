declare var jsPlumb: any;
declare var jsPlumbUtil: any;

export class JsPlumbSingleton {

    private static instance: any = jsPlumb.getInstance({
        Endpoint: ['Dot', {radius: 5}],
        Connector: 'StateMachine',
        HoverPaintStyle: {stroke: '#1e8151', strokeWidth: 2 },
        ConnectionOverlays: [
            [ 'Arrow', {
                location: 1,
                id: 'arrow',
                length: 14,
                foldback: 0.8
            } ],
        ],
        Container: 'drop'
    });

    static getInstance(): any {
        return JsPlumbSingleton.instance;
    }

    static initNode(el: any): void {
        // Create new id for the block
        JsPlumbSingleton.instance.draggable( el, { containment: true });
        // Make the div able to be draggable line from
        JsPlumbSingleton.instance.makeSource(el, {
            filter: '.anchor-out',
            anchor: 'Continuous',
            connectorStyle: { stroke: '#0073CF', strokeWidth: 2, outlineStroke: 'transparent', outlineWidth: 4 },
            connectionType: 'basic',
            connectorHoverStyle: {
              strokeWidth: 3,
              stroke: '#1e8151'
          },
        });
        // Make the div able to be draggable line to
        JsPlumbSingleton.instance.makeTarget(el, {
            dropOptions: { hoverClass: 'dragHover' },
            anchor: 'Continuous',
            connectorStyle: { stroke: '#0073CF', strokeWidth: 2, outlineStroke: 'transparent', outlineWidth: 4 },
            connectionType: 'basic',
            extract: {
                'action': 'the-action'
            },
            allowLoopback: false
        });
    }

    static newId() {
        return jsPlumbUtil.uuid();
    }

    private constructor() {
        if (JsPlumbSingleton.instance) {
            throw new Error('The JsPlumbSingleton is a singleton class and cannot be created!');
        }
        JsPlumbSingleton.instance = this;
    }

}
