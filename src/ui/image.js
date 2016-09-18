import { BaseElement } from './base-elements.js';

export class Image extends BaseElement {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    getElementString() {
        return `
            <img src="${this.filename}" style="width:100%;" />
            `;
    }
}