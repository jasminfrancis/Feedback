import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit {
  countryLang = 'How would you rate your medical examination experiance?';
  status= 1;
  imageShow=2;
   fullScreenMode=true;
   keyBoardLang='English';
  
  constructor(private _router: Router) {
    
   }

  ngOnInit(): void {

   // this.toggleFullScreen(this.fullScreenMode);
    

    
  }
  clickSmiley(value:any){

   let data={status:this.status,keyBoardLang:this.keyBoardLang}
   this._router.navigate(['feedbackPage'],{queryParams:data});
    
  }
  changeLanague(value:any){
  
    if(value==1){
      this.status=1;
      this.countryLang = 'How would you rate your medical examination experiance?';
      this.imageShow=2;
      this.keyBoardLang='Azərbaycanca';

    }else if(value==2){
      this.status=2;
      this.countryLang = 'نرجو منكم تقييم تجربة الفحص الطبي الخاصة بكم.';
      this.imageShow=3;
      this.keyBoardLang='Arabic';
    }else if(value==3){
      this.status=3;
      this.countryLang = 'आप अपने चिकित्सा परीक्षण के अनुभव का मूल्यांकन कैसे करेंगे?';
      this.imageShow=4;
      this.keyBoardLang='Hindi';

    }else if(value==4){
      this.status=4;
      this.countryLang = '您如何评价您的体检经历？';
      this.imageShow=1;
      this.keyBoardLang='Chinese Bopomofo IME';
    }
    

  }

// fullscrren icon click
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
