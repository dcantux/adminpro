import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') labels: string[] = [];
  @Input('data') data: number[] = [];

  constructor() { }

  ngOnInit() {
  }

}
