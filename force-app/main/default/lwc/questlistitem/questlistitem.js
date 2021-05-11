import { LightningElement, api } from 'lwc';

// Icons: https://lightningdesignsystem.com/icons/

export default class Questlistitem extends LightningElement {

    @api
    quest = '';

    handleCompleteButtonClick() {
        const event = new CustomEvent('completeclick', { detail: this.quest });
        this.dispatchEvent(event);
    }

    handleMenuSelect(event) {
        switch(event.detail.value) {
            case 'edit': this.handleEdit(); break;
            case 'delete': this.handleDelete(); break;
        }
    }

    handleEdit() {
        const event = new CustomEvent('editquest', { detail: this.quest });
        this.dispatchEvent(event);
    }

    handleDelete() {
        const shouldDelete = window.confirm(`Really delete quest "${this.quest.Name}"?`);
        if (shouldDelete) {
            const event = new CustomEvent('deletequest', { detail: this.quest });
            this.dispatchEvent(event);
        }
    }
      
}