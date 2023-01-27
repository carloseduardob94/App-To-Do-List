import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('todoList') || '[]');

  constructor(){

  }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  ngOnInit(): void {
    
  }

  public setEmitTaskList(task: string){
    this.taskList.push({task: task, checked: false});
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

  public validateInput(task: string, index: number){
    if(!task.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if(confirm){
        this.deleteItemTask(index)
      }
    }
  }

  public setLocalStorage(){
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem('todoList', JSON.stringify(this.taskList));
  }
}
