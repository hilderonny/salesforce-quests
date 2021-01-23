import { LightningElement, api } from 'lwc';

// Items: https://lightningdesignsystem.com/icons/

export default class Questlistitem extends LightningElement {

    @api
    checked = false;

    @api
    label = '';

    handleCheckButtonClick() {
        this.checked = !this.checked;

        // TODO: Update Record: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_update_record
        
    }
      
}