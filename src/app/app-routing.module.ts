import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppreciationComponent } from './appreciation/appreciation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SmileyComponent } from './smiley/smiley.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [ 
  {path:"" , redirectTo:"smiley", pathMatch:"full"},
{path:"feedbackPage",component:FeedbackComponent},
{path:"smiley",component:SmileyComponent},
{path:"test",component:TestComponent},
{path:"thankyouPage",component:AppreciationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
