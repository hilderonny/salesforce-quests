import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi'; // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_get_list_ui
import QUEST_OBJECT from '@salesforce/schema/Quest__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';

export default class Questlist extends LightningElement {

    quests;
    questsData;
    
    @wire(getListUi, { objectApiName: QUEST_OBJECT, listViewApiName: 'All' })
    questListView({ error, data }) {
        console.log(error, data);
        if (data) {
            this.questsData = data.records;
            this.quests = data.records.records;
        }
    };

    handleQuestCreated(event) {
        console.log(event);
        this.quests.push(event.detail);
    }

    handleTileCompleteClick(event) {
        /*
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
        */
    }

}