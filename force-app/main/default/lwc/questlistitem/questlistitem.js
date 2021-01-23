import { LightningElement, api } from 'lwc';

// Items: https://lightningdesignsystem.com/icons/

export default class Questlistitem extends LightningElement {

    @api
    checked = false;

    @api
    label = '';

    handleCheckButtonClick() {
        this.checked = !this.checked;
    }
      
}