import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedBackLang = 'Describe your feedback';
  responseMsg=1;
  keyBoardLanguage='Azərbaycanca';
 

  constructor(private route:ActivatedRoute ,private _router: Router) { }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      if(params.status==1){
        this.feedBackLang = 'Describe your feedback';
        this.responseMsg=1;
        console.log("language="+params.keyBoardLang);
        this.keyBoardLanguage='en';
      
      }else if(params.status==2){
        this.feedBackLang = 'ماهي ملاحظاتكم';
        this.responseMsg=2; 
        this.keyBoardLanguage='ar';
        //this.keyBoardLang=params.keyBoardLang;
       
      }else if(params.status==3){
        this.feedBackLang = 'अपनी प्रतिक्रिया का वर्णन करें';
        this.responseMsg=3;
        this.keyBoardLanguage='hi';
      }
      else if(params.status==4){
        this.feedBackLang = '描述您的反馈';
        this.responseMsg=4;
        console.log("language="+params.keyBoardLang);
        this.keyBoardLanguage='zh-BOPO';
        
      }
    });
  }
  submitClick(){
    let responseMessge={responseMsg:this.responseMsg};
    this._router.navigate(['thankyouPage'],{queryParams:responseMessge})
  }


  
  
}
