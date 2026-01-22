@IsTest(SeeAllData=true)
public class TestDataAccessClass {

    // This test accesses an existing account. 
    // It also creates and accesses a new test account.
    @IsTest
    static void myTestMethod1() {
        // Query an existing account in the organization. 
               
        // Query the test account that was inserted.
        Account testAccount2 = [SELECT Id, Name FROM Account 
                                WHERE Name='GenePoint' LIMIT 1];
        testAccount2.name='test1222';
        update testAccount2;
    }
}