import { Component, } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  dataPortfolio:any;
  constructor (private dataProvider:DataProviderService){

  }

  ngOnInit():void{
    this.dataProvider.getData().subscribe(data => {
      console.log(data.logo);
      this.dataPortfolio=data;
    });
  }

}
