import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormArray } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: 'app-add-more',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.component.css']
})
export class AddMoreComponent implements OnInit {
testForm : FormGroup;
mobileArray:FormArray;
  constructor(public http:Http) { }

  ngOnInit() {
    this.testForm= new FormGroup({
      "name":new FormControl('',[Validators.minLength(8)]),
      "mobile":new FormArray([])
    })
    this.http.get('https://muthurakki.herokuapp.com/test').toPromise().then((data)=>{
      console.log(data);
    })
  }
  formSubmit(){
    console.log(this.testForm.getRawValue());
  }

  addarray(){
    return new FormGroup({
      "value":new FormControl()
    })
  }

  AddMobile(){
    this.mobileArray = this.testForm.get('mobile') as FormArray;
    this.mobileArray.push(this.addarray());
  }
 
  RemoveMobile(i){
    this.mobileArray = this.testForm.get('mobile') as FormArray;
    this.mobileArray.removeAt(i);
  }
}
