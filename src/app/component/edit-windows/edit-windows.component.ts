import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-edit-windows',
  templateUrl: './edit-windows.component.html',
  styleUrls: ['./edit-windows.component.css']
})
export class EditWindowsComponent {
  @Output() sendData= new EventEmitter <any>();
  @Input() btnDelete:boolean=false;
  dataPortfolio:any ={"img":"","text":"","text2":""};
  edit:boolean = false;
  Img:any;
  Phrase:string ="";
  Detail:string ="";
  

  constructor(){ }

 ngOnInit(){}

  abrirVentanaEdit(): void{
    if(this.edit){
      this.edit=false; 
    }
    else{
      this.edit=true;
    }
  }
  onFileChanges(event:any){
    this.Img = event[0].base64;
  }

  change(){
    this.dataPortfolio.img= this.Img;
    this.dataPortfolio.text= this.Phrase;
    this.dataPortfolio.text2= this.Detail; 
    this.sendData.emit(this.dataPortfolio);
  }
  delete(){
  }
}
