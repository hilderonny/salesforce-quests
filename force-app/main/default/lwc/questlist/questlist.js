import { LightningElement, wire } from 'lwc';
import getAllQuests from '@salesforce/apex/QuestController.getAllQuests';
import { updateRecord } from 'lightning/uiRecordApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Questlist extends LightningElement {

    quests;
    wiredQuests;
    
    @wire(getAllQuests)
    questList(result) {
        this.wiredQuests = result;
        if (result.data) {
            this.quests = result.data;
        }
    };

    handleQuestCreated() {
        refreshApex(this.wiredQuests);
    }

    async handleTileCompleteClick(event) {
        const quest = event.detail;
        const tile = event.target;
        quest.Complete__c = !quest.Complete__c;
        const record = { fields: {
            Id: quest.Id,
            Complete__c: quest.Complete__c
        } };
        await updateRecord(record);
        refreshApex(this.wiredQuests);
    }

    async handleTileDeleteQuest(event) {
        const quest = event.detail;
        await deleteRecord(quest.Id);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Quest deleted',
                variant: 'success'
            })
        );
        refreshApex(this.wiredQuests);
    }

}