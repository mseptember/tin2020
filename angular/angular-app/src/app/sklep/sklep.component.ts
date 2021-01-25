import { Component, OnInit } from '@angular/core';
import { ButService } from '../but.service';
import { But } from '../encje/but';

@Component({
  selector: 'app-sklep',
  templateUrl: './sklep.component.html',
  styleUrls: ['./sklep.component.css']
})
export class SklepComponent implements OnInit {
  
  buty: But[] = [];
  zaznaczonyBut?: But;

  constructor(private butService: ButService) { }

  ngOnInit(): void {
    this.findAll();
  }

  onSelect(but: But): void {
    this.zaznaczonyBut = but;
  }

  findAll(): void {
    this.butService.findAll().subscribe(buty => this.buty = buty);
  }

}
