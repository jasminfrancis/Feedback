import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.css']
})
export class AppreciationComponent implements OnInit {
 thankMessge="Thank you for the feedback";  
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params=>{

      if(params.responseMsg==1){
      this.thankMessge="Thank you for the feedback";
      }else if(params.responseMsg==2){
        this.thankMessge="شكرا لكم";
      }else if(params.responseMsg==3){
        this.thankMessge="शुक्रिया";
      }
      else if(params.responseMsg==4){
        this.thankMessge="谢谢";
      }
    });


    setTimeout(() => {
      this.router.navigate(["/smiley"])
    }, 5000);
  }

}
