import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status = true;

  constructor() { }

  ngOnInit():void{
   // this.elem=document.documentElement;
   //var btn=document.getElementById('toggeleBtn')?.click();
   //this.toggleFullScreen(this.status);
    
    }
    
    // toggleFullScreen(value:any) {

    //   if (!document.fullscreenElement) {
    //       document.documentElement.requestFullscreen();
    //   } else {
    //     if (document.exitFullscreen) {
    //       document.exitFullscreen();
    //     }
    //   }
    // }
  

}
