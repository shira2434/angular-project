import { Component , Input,Output,EventEmitter} from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: string;
  @Output() userselected =new EventEmitter<string>();


onSelect(){
  this.userselected.emit(this.id)
}
get userImgPath() {
  return 'assets/users/' + this.avatar;
  }
                                                                                      
}

