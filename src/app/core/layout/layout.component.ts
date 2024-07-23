import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, TopNavigationComponent]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('🔥', 'asdasda');

  }

}
