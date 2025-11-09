import { Component , Input,Output,EventEmitter} from '@angular/core';
import { USERS } from '../fake_users';

export type UserObj={
  id:string;
  name:string;
  avatar:string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input(({required : true})) user!: UserObj;
  @Input(({required : true})) isSelected!:boolean;
  @Output() userselected =new EventEmitter<string>();


onSelect(){
  this.userselected.emit(this.user.id)
}
get userImgPath() {
  return 'assets/users/' + this.user.avatar;
  }
                                                                                      
}

