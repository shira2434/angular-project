import { Component } from '@angular/core';
import { input } from '../../../../node_modules/@angular/core/index';


type TaskData  ={
id: string;
userId:string;
title:string;
summary:string;
dueDate:string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
    @input({required :true}) task!: Task;
}


