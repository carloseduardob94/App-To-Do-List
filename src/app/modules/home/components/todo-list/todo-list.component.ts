import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: "Minha nova task",
      checked: true
    },
    {
      task: "Minha nova task 2",
      checked: false
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    
  }

  public deleteItemTask(index: number){
    this.taskList.splice(index, 1);
  }

  public deleteAllTask(){
    const confirm = window.confirm("Você realmente deseja deletar todas as tarefas?");
    if(confirm){
      this.taskList = [];
    }
  }
}
