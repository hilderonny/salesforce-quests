import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi'; // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_salesforce_write
import QUEST_OBJECT from '@salesforce/schema/Quest__c';
import NAME_FIELD from '@salesforce/schema/Quest__c.Name';
import COMPLETE_FIELD from '@salesforce/schema/Quest__c.Complete__c';

export default class Addquestinput extends LightningElement {

    // Handle pressing enter in input field
    handleCommit() {
        // Fetch entered quest name
        const input = this.template.querySelector('lightning-input');
        const name = input.value;

        // Create Quest
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = name;
        fields[COMPLETE_FIELD.fieldApiName] = false;
        const recordInput = { apiName: QUEST_OBJECT.objectApiName, fields };
        createRecord(recordInput).then(quest => {
            // Inform list
            const event = new CustomEvent('questcreated', { detail: quest });
            this.dispatchEvent(event);
            // Empty input field
            input.value = '';
        });
    }

}