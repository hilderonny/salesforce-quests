import { LightningElement, wire } from 'lwc';
import getAllQuests from '@salesforce/apex/QuestController.getAllQuests';

export default class Questlist extends LightningElement {
    
    @wire(getAllQuests)
    quests;

}