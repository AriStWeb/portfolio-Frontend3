import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-in-header',
  templateUrl: './banner-in-header.component.html',
  styleUrls: ['./banner-in-header.component.css']
})

export class BannerInHeaderComponent {
  header= {bannerImg: "./assets/bannerImg.png",bannerPhrase: "fraseBanner",bannerDetail: "detalles de banner"};
  edit:boolean = false;
  bannerImg:any = null;
  bannerPhase:string ="";
  bannerResume:string ="";

  abrirVentanaEdit(): void{
    if(this.edit){
      this.edit=false; 
    }
    else{
      this.edit=true;
    }
  }

  onFileChanges(event:any){
    this.bannerImg=event[0].base64;
  }

  changeBanner(){
    this.header.bannerImg = this.bannerImg;
    this.header.bannerPhrase = this.bannerPhase;
    this.header.bannerDetail = this.bannerResume;
  }
    
}
