import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Trainers } from "../models/trainers.model";

@Injectable({
  providedIn:'root'
})

export class TrainerssService{
  constructor(private http:HttpClient) { }

 apiurl:string="https://localhost:44377";

  getAllPolicies():Observable<Trainers[]>
  {
    return this.http.get<Trainers[]>(this.apiurl + '/api/Trainers')
  }

  addTrainerss(addTrainerssRequest:Trainers):Observable<Trainers>{
    // console.log(addTrainerssRequest);
    // console.log("Inside service " + addTrainerssRequest);
    return this.http.post<Trainers>(this.apiurl + '/api/Trainers',addTrainerssRequest);
  }
  getTrainerss(id:any):Observable<Trainers> {
   return this.http.get<Trainers>(this.apiurl + '/api/Trainers' + id);
  }
  updateTrainerss(id:any,updateTrainerss:Trainers):Observable<Trainers>{
    return this.http.put<Trainers>(this.apiurl + '/api/Trainers' + id,updateTrainerss);

  }

  deleteTrainerss(id:number):Observable<Trainers>{
   return this.http.delete<Trainers>(this.apiurl + '/api/Trainers' + id);
  }
}
