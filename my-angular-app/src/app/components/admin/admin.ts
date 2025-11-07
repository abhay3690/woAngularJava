import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
constructor() {
  console.log('Admin component initialized');
}
ngOnInit(): void {
    console.log(' ngOnInit ');
    // api Call
    // subscription
}
ngAfterViewInit(): void {
    console.log(' ngAfterViewInit ');
    // DOM manipulation
}
ngOnDestroy(): void {
    console.log(' ngOnDestroy ');
    // cleanup
}
}
