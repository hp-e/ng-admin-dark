import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HealthNodeComponent } from 'src/app/shared/components/health-node/health-node.component';
import { HealthNodeListComponent } from 'src/app/shared/components/health-node-list/health-node-list.component';
import { HealthNode, HealthReport, HealthResult } from 'src/app/shared/models/healthNodeModel';


// const nodes: HealthNode[] = [
//     {name: 'Histology Service', key: 'patolab.raw.histology.service', health: 'Healthy'},
//     {name: 'Print Service', key: 'patolab.raw.histology.service', health: 'Unhealthy'},
//     {name: 'Invoice Service', key: 'patolab.raw.histology.service', health: 'Degraded'},
//     {name: 'Robot Service', key: 'patolab.raw.histology.service', health: 'SystemDown'},
//     {name: 'Another Service', key: 'patolab.raw.histology.service', health: 'Healthy'}
// ];

const result: HealthResult = {
  status: 'Healthy',
  node: {name: 'Histology Service', key: 'patolab.raw.histology.service'}
};

const report: HealthReport = {
  reportDate: new Date(),
  nodes: [result]
}
export default {
  title: 'Health Node List',
};

export const listOfNodes = () => ({
  component: HealthNodeListComponent,
  props: {
    title: 'Services',
    report
    
   
  },
  moduleMetadata: {
      declarations: [HealthNodeComponent]
  }
});

listOfNodes.story = {
    name: '5 nodes'
};
