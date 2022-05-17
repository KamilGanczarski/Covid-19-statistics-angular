import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() name: string = '';
  @Input() label: string = '';
  @Output() onChangeValue: EventEmitter<string> = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() optionally: boolean = false;
  @Input() pxLg: string = '';

  value: string= '';

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.onChangeValue.emit(this.value);
  }
}
