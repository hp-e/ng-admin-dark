import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthNodeComponent } from './components/health-node/health-node.component';



@NgModule({
  declarations: [HealthNodeComponent],
  imports: [
    CommonModule
  ],
  exports: [HealthNodeComponent]
})
export class SharedModule { }
