import { Component, OnInit, Input } from '@angular/core';
import { maestro } from '../principal';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './maestro-detail.component.html',
  styleUrls: ['./maestro-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: | null = null;

  constructor() { }

  ngOnInit() {
  }
}
