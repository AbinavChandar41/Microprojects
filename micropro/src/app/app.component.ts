import { Component } from '@angular/core';
import {Subsidy} from './model/subsidy';
import {SubsidyService} from './subsidy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  subsidy:Subsidy;
  result:string;
  subsidyArr:Subsidy[];
  flag:boolean;


  constructor(private service:SubsidyService){
    this.subsidy=new Subsidy();
    this.result="";
    this.subsidyArr=[];
    this.flag=false;

    
  }
  InsertSubsidy(data:any){
    this.subsidy.id=data.farmerId;
    this.subsidy.farmerName=data.farmerName;
    this.subsidy.farmerSubsidy=data.farmerSubsidy;
    this.result=this.service.InsertSubsidy(this.subsidy);
  }

  UpdateSubsidy(data:any){
    this.subsidy.id=data.farmerId;
    this.subsidy.farmerName=data.farmerName;
    this.subsidy.farmerSubsidy=data.farmerSubsidy;
    this.result=this.service.UpdateSubsidy(this.subsidy);
  }

  DeleteSubsidy(data:any){
    this.result=this.service.DeleteSubsidy(data.farmerId);
  }

  FindAllSubsidy(){
    this.subsidyArr=this.service.FindAllSubsidy();
    this.flag=true;
  }

  FindSubsidy(data:any){
    this.subsidy=this.service.FindSubsidy(data.farmerId);
    this.result=this.subsidy.id+" "+this.subsidy.farmerName+ " " +this.subsidy.farmerSubsidy;
  }




}











