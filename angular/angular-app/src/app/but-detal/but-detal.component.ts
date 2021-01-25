import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButService } from '../but.service';
import { But } from '../encje/but';
import { Location } from '@angular/common';

@Component({
  selector: 'app-but-detal',
  templateUrl: './but-detal.component.html',
  styleUrls: ['./but-detal.component.css']
})
export class ButDetalComponent implements OnInit {

  isChoosen = true;

  but?: But;

  constructor(private butService: ButService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.findModel();
  }

  findModel(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; //idObuwia
    this.butService.findModel(id)
      .subscribe(but => this.but = but);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void { //działa, ale ogarniemy typa
    this.butService.update(this.but).subscribe(() => this.goBack());
    console.log("FRUGO");
  }
  
  delete(): void { //działa
    this.butService.delete(this.but.idObuwia).subscribe(() => this.goBack());
  }

}
