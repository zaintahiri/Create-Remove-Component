import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  ngOnDestroy(): void {
    alert("ngOnDestroy is called only once before the view is going to destroy. it is best place to cleanup the resources that you have used into the component");
  }
  ngAfterViewChecked(): void {
    alert("After view check is called everytime if there is change in view. and it is frequently called after the AfterViewInit is called");
  }
  ngAfterViewInit(): void {
    alert("After view init is called, it will call only once");
  }
  
  ngAfterContentChecked(): void {
    // alert("After Content is checked");  
  }
  ngAfterContentInit(): void {
    // alert("After content init");
  }

  @Input() pUsername:string='';
  ngOnChanges(changes: SimpleChanges): void {
    // alert("ngOnChanges is called");
  }

}