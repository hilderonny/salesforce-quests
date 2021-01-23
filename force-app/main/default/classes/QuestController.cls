public with sharing class QuestController {
    
    @AuraEnabled(cacheable=true)
    public static List<Quest__c> getAllQuests() {
        return [SELECT Id, Titel__c, Status__c FROM Quest__c WHERE Complete__c = FALSE ORDER BY CreatedDate];
    }
}