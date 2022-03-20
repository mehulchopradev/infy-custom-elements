import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

type Option = {
  label: string;
  value: string;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomSelectComponent implements OnInit {

  @Input()
  options: string = '';

  @Input()
  name: string = '';

  @Output()
  onChange = new EventEmitter();

  optionsObj: Option[] = [];

  constructor() { }

  ngOnInit(): void {
    this.optionsObj = JSON.parse(this.options);
  }

  onCustomSelectChange(event: any) {
    this.onChange.emit(event.target.value);
  }
}
