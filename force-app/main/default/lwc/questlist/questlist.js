import { LightningElement, wire } from 'lwc';
import getAllQuests from '@salesforce/apex/QuestController.getAllQuests';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';

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

    handleTileCompleteClick(event) {
        const quest = event.detail;
        const tile = event.target;
        quest.Complete__c = !quest.Complete__c;
        const record = { fields: {
            Id: quest.Id,
            Complete__c: quest.Complete__c
        } };
        updateRecord(record).then(() => {
            refreshApex(this.wiredQuests);
        });
    }

}