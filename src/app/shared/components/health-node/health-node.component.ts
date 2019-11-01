import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-health-node',
  templateUrl: './health-node.component.html',
  styleUrls: ['./health-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthNodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
