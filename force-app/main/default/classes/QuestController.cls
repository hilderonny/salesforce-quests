public with sharing class QuestController {
    
    @AuraEnabled(cacheable=true)
    public static List<Quest__c> getAllQuests() {
        return [SELECT Id, Complete__c, Name FROM Quest__c ORDER BY Complete__c DESC, CreatedDate DESC];
    }
}