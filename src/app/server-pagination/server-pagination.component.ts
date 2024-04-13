import { Component, OnInit, inject } from '@angular/core';
import { ShareService } from '../share/share.service';

export interface IcandidateInfo {
  candidateId: number
  name: string
  contactNo: string
  email: string
  password: string
  createdDate: string
  city: string
  collegeName: string
  education: string
  bankName: any
  accNo: any
  ifscCode: any
  reference: any
}

@Component({
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.css']
})
export class ServerPaginationComponent implements OnInit {
  share=inject(ShareService);
  public allCandidates!:IcandidateInfo[];
  ngOnInit(): void {
    this.share.getAllCandidates().subscribe(v=>{
      this.allCandidates=v.data
      //console.log(v)
    })
  }

}
