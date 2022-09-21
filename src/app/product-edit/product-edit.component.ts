import { Component, OnInit } from '@angular/core';
import { PrimericaService } from '../primerica.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  constructor(
    private prime: PrimericaService,
    private formBuilder: FormBuilder
  ) {}

  primericaForms!: FormGroup;
  ngOnInit() {
    this.primericaForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
    });
  }

  submit() {
    if (this.primericaForms.valid) {
      this.prime.postDetails(this.primericaForms.value).subscribe((res) => {});
      console.log(this.primericaForms.value);
    }
  }
}
