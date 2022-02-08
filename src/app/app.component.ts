import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: './home', icon: 'home' },
    { title: 'Gallery', url: './gallery', icon: 'albums' },
    { title: 'About', url: './about', icon: 'information' },
    /*{ title: 'Newsletter', url: './newsletter', icon: 'book' }
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}