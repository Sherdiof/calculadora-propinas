import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/services/users.service";
import {User} from "../../../../core/models/users.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = {name: '', email: '', role: 'waiter', active: true};
  password: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.userService.getUserByEmail(email).subscribe(data => {
        if (data) {
          this.user = data as User;
          this.user.email = email;
        }
      });
    }
  }

  onSubmit() {
    if (this.user.id) {
      console.log('update');
      this.userService.updateUser(this.user);
    } else {
      console.log('update');
      this.userService.createUser(this.user, this.password);
    }
    //this.user = {name: '', email: '', role: 'waiter', active: true};
    //this.password = '';

    this.router.navigateByUrl('/users');
  }
}
