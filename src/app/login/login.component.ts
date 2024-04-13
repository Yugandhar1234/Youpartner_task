import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShareService } from '../share/share.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  profilInfo: any;
  constructor(private fb: FormBuilder, private str: ToastrService,
    private route: Router, private share: ShareService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(5)]],
      password: ['', [Validators.required]],
    })

  }
  loginMethod() {
    if (this.login.valid) {
      this.share.login(this.login.value.id).subscribe((data) => {
        this.profilInfo = data;
        if (this.profilInfo.password == this.login.value.password) {
          this.route.navigate(['/home']);
          this.share.behaviour.next(this.profilInfo);
           localStorage.setItem('user', JSON.stringify(this.profilInfo));
            this.str.success('Login Successfully');
        } else {
          this.str.error('wrong password')
        }
      })
    }
    else {
      this.str.error('invalid user Data')
    }
  }
}
