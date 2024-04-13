import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit{
  constructor(private share:ShareService){}
  dataSource!:any
  info:any
  displayedColumns:any[]=["id","userId","name","email","isActive","role"]
  ngOnInit(): void {
    this.share.getAll().subscribe((res:any)=>{
      this.info = res;
      this.dataSource=new MatTableDataSource(this.info);
    })
  }
  
}
