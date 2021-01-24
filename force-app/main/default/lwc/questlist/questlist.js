import { LightningElement, wire } from 'lwc';
import getAllQuests from '@salesforce/apex/QuestController.getAllQuests';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';

export default class Questlist extends LightningElement {
    
    @wire(getAllQuests)
    quests;

    handleTileCompleteClick(event) {
        const quest = event.detail;
        const tile = event.target;
        quest.Complete__c = !quest.Complete__c;
        const record = { fields: {
            Id: quest.Id,
            Complete__c: quest.Complete__c
        } };
        updateRecord(record).then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Quest updated',
                    variant: 'success'
                })
            );
            tile.quest = quest; // Trigger re-render of tile
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