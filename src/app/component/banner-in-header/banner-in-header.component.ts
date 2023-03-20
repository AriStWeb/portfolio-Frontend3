import { Component, Output } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';


@Component({
  selector: 'app-banner-in-header',
  templateUrl: './banner-in-header.component.html',
  styleUrls: ['./banner-in-header.component.css']
})

export class BannerInHeaderComponent {
  userLog:boolean=true; //esto lo resibira de componente login
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

  processData(dataPortfolio:any) {
   this.dataPortfolio.header.bannerImg=dataPortfolio.img;
   this.dataPortfolio.header.bannerPhrase=dataPortfolio.text;
   this.dataPortfolio.header.bannerDetail=dataPortfolio.text2;
  }


}
