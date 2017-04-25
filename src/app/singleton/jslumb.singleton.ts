declare var jsPlumb: any;

export class JsPlumbSingleton {

    private static instance: any = jsPlumb.getInstance({
        Endpoint: ['Dot', {radius: 2}],
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

    public static getInstance(): any {
        return JsPlumbSingleton.instance;
    }

    constructor() {
        if (JsPlumbSingleton.instance) {
            throw new Error('The JsPlumbSingleton is a singleton class and cannot be created!');
        }
        JsPlumbSingleton.instance = this;
    }

}
