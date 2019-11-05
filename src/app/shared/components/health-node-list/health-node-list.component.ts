import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HealthNodeComponent } from '../health-node/health-node.component';
import { HealthNode, HealthReport } from '../../models/healthNodeModel';

@Component({
  selector: 'app-health-node-list',
  templateUrl: './health-node-list.component.html',
  styleUrls: ['./health-node-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthNodeListComponent implements OnInit {
  @Input() title: string;
  @Input() report: HealthReport;

  constructor() { }

  ngOnInit() {
  }

}
