import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog, MatDialogConfig,
} from '@angular/material/dialog';
import { ModelComponentComponent } from '../model-component/model-component.component';
import { ShareService } from '../share/share.service';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface Iemployee {
  firstName: string,
  lastName: string,
  email: string,
  companyName: string,
  date: string,
  gender: string,
  designation: string,
}
@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {
  dataSource!: MatTableDataSource<Iemployee>;
  public employeeData!: Iemployee[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'date', 'companyName', 'designation', "action"];
  Columns: string[] = this.displayedColumns.slice()
  dialogref: any;
  @ViewChild(MatPaginator) pages!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private matDailag: MatDialog, private share: ShareService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.share.getALLEmployee().subscribe((data: Iemployee[]) => {
      this.employeeData = data;
      this.dataSource = new MatTableDataSource<Iemployee>(this.employeeData);
      this.dataSource.paginator=this.pages;
      this.dataSource.sort=this.sort;
    })
  }
  applyFilter(event: any) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openModel() {
    this.dialogref = this.matDailag.open(ModelComponentComponent);
    this.getnotify();
  }
  editModel(data: any) {
    const config= new MatDialogConfig();
    config.autoFocus=true;
    config.disableClose=true;
    config.data=data
    this.dialogref = this.matDailag.open(ModelComponentComponent,config);
    this.getnotify()
  }
  getnotify() {
    this.dialogref.afterClosed().subscribe((val: any) => {
      console.log('The dialog was closed');
      if (val) {
        this.getAll();
      }
    })
  }
  delete(id: number) {
    debugger
    this.share.deleteEmployee(id).subscribe(res => {
      this.getAll();
      this.share.openSnackbar('record deleted successfully','Done')
    })
  }

}
