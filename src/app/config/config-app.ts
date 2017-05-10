import { ToolModel } from '../models/tool-model';

export class ConfigApp {
    static dropContainerName = 'drop';

    static dropContainer = '#' + ConfigApp.dropContainerName;

    static draggableSelector = 'span';

    static draggableConfig = {
      cursor: 'move',
      delay: 0,
      refreshPositions: true,
      //  revert: true,
      scroll: false,
      containement: ConfigApp.dropContainer,
      appendTo: ConfigApp.dropContainer
    };

    static localStorage = {
        id: 'id',
        type: 'type'
    };

    static imageType = '.png';

    static toolEltsClass = '.elt';

    static toolEltsClassName = 'elt';

    static pathImages = 'assets/images/';

    static jsPlumbInstanceConfig = {
        Endpoint: ['Dot', {radius: 3}],
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
        Container: ConfigApp.dropContainerName
    };

    static connectorStyle = {
        stroke: '#0073CF',
        strokeWidth: 2,
        outlineStroke: 'transparent',
        outlineWidth: 4
    };

    static jsPlumbMakeSourceConfig = {
        filter: '.anchor-out',
        anchor: 'Continuous',
        connectorStyle: ConfigApp.connectorStyle,
        connectionType: 'basic',
        connectorHoverStyle: {
            strokeWidth: 3,
            stroke: '#1e8151'
        }
    };

    static jsPlumbMakeTargetConfig = {
        dropOptions: { hoverClass: 'dragHover' },
        anchor: 'Continuous',
        connectorStyle: ConfigApp.connectorStyle,
        connectionType: 'basic',
        extract: {
            'action': 'the-action'
        },
        allowLoopback: false
    };

    static separator = '_type_';

    static dataSources = [
        'dbpedia',
        'twitter',
        'facebook',
        'open-agenda',
        'owm',
        'rss-feed',
        'eventful'
    ]

    static boundingBox = 'geo-location';

    static keywords = 'keyword-list';

}
