import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  navigation = [
    {link: '/home', title: 'Strona główna'},
    {link: '/doctors', title: 'Dentyści'},
    {link: '/profile', title: 'Profil'},
  ];
  
  theme = 'default-theme';


  constructor() {

  }

  ngOnInit(): void {
    document.body.classList.add(this.theme, 'mat-app-background');
  }

}
