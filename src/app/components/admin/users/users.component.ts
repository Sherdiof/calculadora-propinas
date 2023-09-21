import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from "../../../core/models/users.model";
import {UserService} from "../../../core/services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = null;

  constructor(private userService: UserService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
   this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().then(data => {
      this.users = data.docs.map(e => {
        const data = e.data();
        const id = e.id;
        return {
          id: id,
          name: data['name'],
          email: data['email'],
          role: data['role'],
        } as User;
      });

      this.cd.detectChanges();
    });
  }


  deleteUser(user: User) {
    this.userService.deleteUser(user).then(value => {
      this.getUsers();
    });
  }
}
