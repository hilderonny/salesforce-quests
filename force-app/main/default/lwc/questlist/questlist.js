import { LightningElement, wire } from 'lwc';
import getAllQuests from '@salesforce/apex/QuestController.getAllQuests';
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