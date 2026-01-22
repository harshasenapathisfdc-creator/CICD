import { LightningElement } from 'lwc';

export default class DemoComp extends LightningElement {

  errorMessage;
  errorCallback(error, stack){
    console.log(error);
    this.errorMessage=json.stringfy(error);
   
 }
}