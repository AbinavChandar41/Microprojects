import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subsidy} from "./model/subsidy";

@Injectable({
  providedIn: 'root'
})
export class SubsidyService {
  url:string;
  subsidyArr:Subsidy[];
  subsidy:Subsidy;


  constructor(private http:HttpClient) { 
    this.url="http://localhost:3004/Subsidy";
    this.subsidyArr=[];
    this.subsidy=new Subsidy();
  }

  InsertSubsidy(subsidy:Subsidy){
    this.http.post<Subsidy>(this.url,subsidy).subscribe();
    return "Farmer Details Added";
  }
  UpdateSubsidy(subsidy:Subsidy){
    this.http.put<Subsidy>(this.url+"/"+subsidy.id,subsidy).subscribe();
    return "Farmers Details Updated";
  }

  DeleteSubsidy(farmerId:number){
    this.http.delete<Subsidy>(this.url+"/"+farmerId).subscribe();
    return "Farmers Detail Deleted";
  }

  FindAllSubsidy(){
    this.http.get<Subsidy[]>(this.url).subscribe(data=>this.subsidyArr=data);
    return this.subsidyArr;
  }
  FindSubsidy(farmerId:number){
    this.http.get<Subsidy>(this.url+"/"+farmerId).subscribe(data=>this.subsidy=data);
    return this.subsidy;



}

}

































