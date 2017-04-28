import { ToolModel } from '../models/tool-model';

export class ConfigApp {
    static dropContainer = '#drop';

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
}
