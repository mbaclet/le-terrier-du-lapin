import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    isRabbit: false
  };
  submitted = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      firstName: '',
      lastName: '',
      isRabbit: false
    };
  }

}
