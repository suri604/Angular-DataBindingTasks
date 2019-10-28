import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  @Output() parentEvent = new EventEmitter();
  public message = '';


  ngOnInit() {
  }
  fireEvent() {
    this.parentEvent.emit(this.message);
  }

}
