import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthNodeComponent } from './components/health-node/health-node.component';
import { HealthNodeListComponent } from './components/health-node-list/health-node-list.component';
import { HealthNodePanelComponent } from './components/health-node-panel/health-node-panel.component';



@NgModule({
  declarations: [HealthNodeComponent, HealthNodeListComponent, HealthNodePanelComponent],
  imports: [
    CommonModule
  ],
  exports: [HealthNodeComponent, HealthNodeListComponent, HealthNodePanelComponent]
})
export class SharedModule { }
