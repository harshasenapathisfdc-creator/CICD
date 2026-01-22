import { LightningElement, track } from 'lwc';  
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';
//import fetchAccounts from '@salesforce/apex/getRecordDataController.getAccounts';  
import { NavigationMixin } from 'lightning/navigation';  
  
const columns = [  
    { label: 'Id', fieldName: 'Id' },  
    { label: 'Name', fieldName: 'Name' },  
    {type: "button", typeAttributes: {  
        label: 'View',  
        name: 'View',  
        title: 'View',  
        disabled: false,  
        value: 'view',  
        iconPosition: 'left'  
    }},  
    {type: "button", typeAttributes: {  
        label: 'Edit',  
        name: 'Edit',  
        title: 'Edit',  
        disabled: false,  
        value: 'edit',  
        iconPosition: 'left'  
    }},  
    {type: "button", typeAttributes: {  
        label: 'Create Contact',  
        name: 'New',  
        title: 'New',  
        disabled: false,  
        value: 'new',  
        iconPosition: 'left'  
    }} 
    
];  
  
export default class accountSearchLWC extends NavigationMixin(LightningElement) {  
  
    @track accounts;  
    @track error;  
    @track columns = columns;  
  
    handleKeyChange( event ) {  
          
        const searchKey = event.target.value;  
  
        if ( searchKey ) {  
  
            fetchAccounts( { searchKey } )    
            .then(result => {  
  
                this.accounts = result;  
  
            })  
            .catch(error => {  
  
                this.error = error;  
  
            });  
  
        } else  
        this.accounts = undefined;  
  
    }      
      
    callRowAction( event ) {  
          
        const recId =  event.detail.row.Id;  
        const actionName = event.detail.action.name;  
        if ( actionName === 'Edit' ) {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'edit'  
                }  
            })  
  
        } else if ( actionName === 'View') {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'view'  
                }  
            })  
  
        } 
        else if(actionName==='New'){

            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
                },
            }); 
        }        
  
    }  
  
}