import { Component } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';


@Component({
  selector: 'app-banner-in-header',
  templateUrl: './banner-in-header.component.html',
  styleUrls: ['./banner-in-header.component.css']
})

export class BannerInHeaderComponent {
  dataPortfolio:any;
  edit:boolean = false;
  bannerImg:any;
  bannerPhrase:string ="";
  bannerDetail:string ="";

  constructor(private dataProvider:DataProviderService){

  }

  ngOnInit(): void {
    this.dataProvider.getData().subscribe(data => {
      console.log(data.logo);
      this.dataPortfolio = data;
    });
  }
  abrirVentanaEdit(): void{
    if(this.edit){
      this.edit=false; 
    }
    else{
      this.edit=true;
    }
  }

  onFileChanges(event:any){
    this.bannerImg = event[0].base64;
  }

  changeBanner(){
    this.dataPortfolio.header.bannerImg = this.bannerImg;
    this.dataPortfolio.header.bannerPhrase = this.bannerPhrase;
    this.dataPortfolio.header.bannerDetail = this.bannerDetail;

  }
    
}
