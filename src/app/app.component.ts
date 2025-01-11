import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,PostListComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Create-Remove-Component';

  // ViewContainerRef is used to load the component inside the view
  constructor(private viewContainerRef:ViewContainerRef){

  }
  // this one method to use component programmatically
  getPostComponent()
  {
    return PostListComponent;
  }

  // this function will be called on click to load component inside the view app.Component.html
  createComponent(){
    // this.viewContainerRef.createComponent(PostListComponent);
    this.viewContainerRef.createComponent(ProfileComponent);
  }
  removeComponent(){
    this.viewContainerRef.remove();
  }


  username:string="Zain ul Abdin";
  bindUsername:string="";
  changeValue(){
    this.username=this.bindUsername;
    this.bindUsername="";
  }
}
