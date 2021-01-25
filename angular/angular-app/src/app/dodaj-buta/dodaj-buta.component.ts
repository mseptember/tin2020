import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButService } from '../but.service';

@Component({
  selector: 'app-dodaj-buta',
  templateUrl: './dodaj-buta.component.html',
  styleUrls: ['./dodaj-buta.component.css']
})
export class DodajButaComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private butService: ButService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  addObuwie(): void { //działa (domyślnie jeżeli id jest zajęte to tworzy nowy obiekt z pustego konstruktora)
    this.butService.addBut(this.formGroup.value).subscribe(() => window.location.reload());
  }

  prepareFormGroup() {
    this.formGroup = this.fb.group({
      marka: [''],
      rozmiar: [''],
      material: [''],
      cena: ['']
    })
  }

}
