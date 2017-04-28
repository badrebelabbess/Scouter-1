import { ElementRef } from '@angular/core';

import { JsPlumbSingleton } from '../singleton/jslumb.singleton';

export class ToolModel {

    private static type = '.png';

    private elt: string;

    constructor(elt: string) {
        this.elt = elt;
     }

    /**
     * create div tool element like :
     *
     * <div class="elt pic.png">
     *       <img src="assets/images/pic.png"/>
     *       <div class="selector anchor-out"></div>
     *       <p>elt name</p>
     * </div>
     */
    getToolIstanceElement(): HTMLDivElement {
        // Tool element container
        const pic = this.getPictureOfElement();
        const newDiv = document.createElement('div');
        newDiv.classList.add('elt', pic);
        newDiv.id = JsPlumbSingleton.newId();
        newDiv.style.position = 'absolute';
        newDiv.style.left = '412.988px';
        newDiv.style.top = '26.6px';
        // Create image element
        const img = document.createElement('img');
        img.src = 'assets/images/' + pic;
        // Create anchor element
        const anchor = document.createElement('div');
        anchor.classList.add('selector', 'anchor-out');
        // Create paragraph element
        const p = document.createElement('p');
        p.innerHTML = this.elt;
        // append element to tool element
        newDiv.appendChild(img);
        newDiv.appendChild(anchor);
        newDiv.appendChild(p);

        return newDiv;
    }

    /**
     * Create a picture string to the element.
     */
    private getPictureOfElement() {
        return this.elt.replace(/ /g, '-').toLowerCase() + ToolModel.type;
    }
}
