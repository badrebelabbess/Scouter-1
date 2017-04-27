export class ToolModel {

    private static type = '.png';

    private id: string;

    private elt: string;

    constructor(elt: string) {
        this.elt = elt;
     }

    getId(): string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }

    getToolIstanceElement(): string {
        const pic = this.getPictureOfElement();
        return '<div class="elt ' + pic + '">' +
              '<img src="assets/images/' + pic + '"/>' +
              '<div class="selector anchor-out"></div>' +
              '<p>' + this.elt + '</p>' +
            '</div>';
    }

    private getPictureOfElement() {
        return this.elt.replace(/ /g, '-').toLowerCase() + ToolModel.type;
    }
}
