import { Component, OnInit } from '@angular/core';
import { Trainers } from '../models/trainers.model';
import { TrainerssService } from '../services/trainers.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  Trainerslist:any =[];

constructor(private TrainerssService:TrainerssService){}

ngOnInit(): void {
 this.TrainerssService.getAllPolicies().subscribe({

  next:(Trainerslist: any)=>{
    console.log(Trainerslist);
    this.Trainerslist=Trainerslist;
  },
  error:(response: any)=>{
    console.log(response);
  }



 })

}
}
