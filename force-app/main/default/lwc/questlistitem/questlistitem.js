import { LightningElement, api } from 'lwc';

// Icons: https://lightningdesignsystem.com/icons/

export default class Questlistitem extends LightningElement {

    @api
    quest = '';

    handleCompleteButtonClick() {

        const event = new CustomEvent('completeclick', { detail: this.quest });
        this.dispatchEvent(event);
        
    }
      
}