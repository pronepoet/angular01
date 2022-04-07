import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal (1, 'Watch finding Nemo','Find an online version and watch Merlin find his son'),
    new Goal (2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goal (3, 'Get new Phone Case', 'Dianas birthday coming up soon'),
    new Goal (4, 'Get Dog Food', 'Pupper likes expensive sancks'),
    new Goal (5, 'Solve Math HomeWork','Damn Math'),
    new Goal (6, 'Plot My World domination plan','Cause I am an evil overlord'), 
   ];

   toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
