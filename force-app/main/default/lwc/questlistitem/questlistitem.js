import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import COMPLETE_FIELD from '@salesforce/schema/Quest__c.Complete__c';
import ID_FIELD from '@salesforce/schema/Quest__c.Id';

// Items: https://lightningdesignsystem.com/icons/

export default class Questlistitem extends LightningElement {

    @api
    checked = false;

    @api
    label = '';

    @api
    recordid = '';

    handleCheckButtonClick() {
        this.checked = !this.checked;

        // TODO: Update Record: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_update_record

        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordid;
        fields[COMPLETE_FIELD.fieldApiName] = this.checked;

        const recordInput = { fields };

        console.log(recordInput);

        updateRecord(recordInput).then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Quest updated',
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating quest',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
        
    }
      
}