import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../share/share.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.css']
})
export class ModelComponentComponent implements OnInit{
 
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,private fb:FormBuilder, private share:ShareService,private dialog:MatDialogRef<ModelComponentComponent>){}
  employee:FormGroup=this.fb.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    date:[''],
    gender:['Male'],
    companyName:[''],
    designation:['']
  })

  ngOnInit(): void {
    console.log(this.data)
    this.employee.patchValue(this.data)
  }
  employeeSub(){
    if(this.employee.valid){
      if(this.data){
        this.share.employeeUpdate(this.employee.value,this.data.id).subscribe((res)=>{
          this.getFlag()
        },
        (err)=>{
          this.share.openSnackbar('error','warning')
        })
      }else{
        this.share.employeeInfo(this.employee.value).subscribe((val)=>{
        this.getFlag()
        },(err)=>{
          this.share.openSnackbar('error');
        })
      }
      
    }
  }
  getFlag(){
    this.dialog.close(true);
    this.share.openSnackbar('update successful');
  }
}
