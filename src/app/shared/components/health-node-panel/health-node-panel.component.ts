import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HealthNodePanelItem } from '../../models/healthNodeModel';

@Component({
  selector: 'app-health-node-panel',
  templateUrl: './health-node-panel.component.html',
  styleUrls: ['./health-node-panel.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthNodePanelComponent implements OnInit {
  @Input() title: string;
  @Input() panels: HealthNodePanelItem[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
