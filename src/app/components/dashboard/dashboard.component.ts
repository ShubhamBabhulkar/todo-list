import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todoForm = new FormGroup({
    taskName: new FormControl('', [
      Validators.required
    ])
  });

todoItems = [];
selectedForDelete = [];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  getrequired = (value) => {
    return this.todoForm.get(value);
  }

  saveTask = (taskName) => {
    this.todoItems.push(taskName);
    this.todoForm.reset();
  }

  deleteItem = (index) => {
    if (index > -1) {
      this.todoItems.splice(index, 1);
      this.snackBar.open('Item deleted successfully', 'ok', {
        duration: 3000,
      });
    }
  }

  selectForDelete = (isChecked, item) => {
    const index = this.selectedForDelete.indexOf(item);
    if (!isChecked) {
      this.selectedForDelete.splice(index, 1);
    } else {
      this.selectedForDelete.push(item);
    }
  }

  multiDelete = () => {
    for (let i = 0; i < this.selectedForDelete.length; i++) {
      let delteditem = this.todoItems.indexOf(this.selectedForDelete[i]);
      this.todoItems.splice(delteditem, 1);
    }
    this.selectedForDelete = [];
    this.snackBar.open('Items deleted successfully', 'ok', {
      duration: 3000,
    });
  }
 }
