import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShareService } from '../share/share.service';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  register!: FormGroup;
  constructor(private fb: FormBuilder, private str: ToastrService,
    private route: Router, private share: ShareService) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      userId: ['', [Validators.required, Validators.maxLength(5)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isActive: [false, Validators.required],
      role: ['male', [Validators.required]]
    })
  }
  registerMethod() {
    //debugger
    if (this.register.valid) {
      this.share.register(this.register.value).subscribe((data) => console.log(data))
      this.str.success('Registeration success')
    }
    else {
      this.str.error('registration fail')
    }
  }
}
