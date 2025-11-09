import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User,Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'angular-app';
  users = USERS;
  
  selectedUser?:any;


  onUserSelected( id :string): void {

    const user = this.users.find(user => user.id === id);
    if(user)
     this.selectedUser=user;
  }
}
