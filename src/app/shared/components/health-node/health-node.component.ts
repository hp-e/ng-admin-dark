import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HealthResult } from '../../models/healthNodeModel';

@Component({
  selector: 'app-health-node',
  templateUrl: './health-node.component.html',
  styleUrls: ['./health-node.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthNodeComponent implements OnInit {

  @Input() health: HealthResult;

  // @Input() title: string;
  // @Input() health: string;
  // @Input() nodeKey: string;
  
  constructor() { }

  ngOnInit() {
  }

}
