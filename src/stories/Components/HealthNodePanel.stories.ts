import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HealthNodeComponent } from 'src/app/shared/components/health-node/health-node.component';
import { HealthNodeListComponent } from 'src/app/shared/components/health-node-list/health-node-list.component';
import { HealthNode, HealthNodePanelItem, HealthReport, HealthResult } from 'src/app/shared/models/healthNodeModel';
import { HealthNodePanelComponent } from 'src/app/shared/components/health-node-panel/health-node-panel.component';


// const serviceNodes: HealthNode[] = [
//     {name: 'Histology Service', key: 'patolab.raw.histology.service', health: 'Healthy'},
//     {name: 'Print Service', key: 'patolab.raw.histology.service', health: 'Unhealthy'},
//     {name: 'Invoice Service', key: 'patolab.raw.histology.service', health: 'Degraded'},
//     {name: 'Robot Service', key: 'patolab.raw.histology.service', health: 'SystemDown'},
//     {name: 'Another Service', key: 'patolab.raw.histology.service', health: 'Healthy'}
// ];
// const LongListNodes: HealthNode[] = [
//     {name: 'Histology Service', key: 'patolab.raw.histology.service', health: 'Healthy'},
//     {name: 'Print Service', key: 'patolab.raw.histology.service', health: 'Unhealthy'},
//     {name: 'Invoice Service', key: 'patolab.raw.histology.service', health: 'Degraded'},
//     {name: 'Robot Service', key: 'patolab.raw.histology.service', health: 'SystemDown'},
//     {name: 'Histology Service', key: 'patolab.raw.histology.service', health: 'Healthy'},
//     {name: 'Print Service', key: 'patolab.raw.histology.service', health: 'Unhealthy'},
//     {name: 'Invoice Service', key: 'patolab.raw.histology.service', health: 'Degraded'},
//     {name: 'Robot Service', key: 'patolab.raw.histology.service', health: 'SystemDown'},
//     {name: 'Another Service', key: 'patolab.raw.histology.service', health: 'Healthy'}
// ];

// const databaseNodes: HealthNode[] = [
//     {name: 'Patolab', key: 'patest01.Patolab_test', health: 'Healthy'},
//     {name: 'Print Service', key: 'patolab.raw.histology.service', health: 'Healthy'},
    
// ];

// const websiteNodes: HealthNode[] = [
//     {name: 'Patogen WWW', key: 'www.patogen.no', health: 'Healthy'},
//     {name: 'PatoLab PROD', key: 'patolab.patogen.local', health: 'Healthy'},
//     {name: 'PatoLink PROD', key: 'patolab.patogen.local', health: 'Healthy'},
    
// ];
const defaultNode: HealthNode = { name: 'Histology Service', key: 'patolab.raw.histology.service'}

const defaultResult: HealthResult = {
    message: 'message',
    status: 'Healthy',
    result: 'result',
    node: defaultNode
};

const defaultReport: HealthReport = {
    reportDate: new Date(),
    nodes: [defaultResult]
};

const panelsThree: HealthNodePanelItem[] = [
    {title: 'Services', report: defaultReport},
    {title: 'Databases', report: defaultReport},
    {title: 'Websites', report: defaultReport},
];

// const panelsFive: HealthNodePanelItem[] = [
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Databases', nodes: databaseNodes},
//     {title: 'Websites', nodes: websiteNodes},
// ];

// const panelsTen: HealthNodePanelItem[] = [
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Services', nodes: serviceNodes},
//     {title: 'Databases', nodes: databaseNodes},
//     {title: 'Databases', nodes: LongListNodes},
//     {title: 'Databases', nodes: databaseNodes},
//     {title: 'Websites', nodes: websiteNodes},
//     {title: 'Websites', nodes: LongListNodes},
//     {title: 'Websites', nodes: websiteNodes},
//     {title: 'Websites', nodes: websiteNodes},
// ];


const panelOne: HealthNodePanelItem[] = [
    {title: 'Services', report: defaultReport},
    
];

export default {
  title: 'Health Panels',
};

export const panelOfNodes = () => ({
  component: HealthNodePanelComponent,
  props: {
      panels: panelsThree    ,
      title: 'PATEST01'
   
  },
  moduleMetadata: {
      declarations: [HealthNodeComponent, HealthNodeListComponent]
  }
});

panelOfNodes.story = {
    name: '3 panels'
};

export const panelOfOne = () => ({
  component: HealthNodePanelComponent,
  props: {
      panels: panelOne,    
      title: 'PATEST01'
   
  },
  moduleMetadata: {
      declarations: [HealthNodeComponent, HealthNodeListComponent]
  }
});

panelOfOne.story = {
    name: '1 panel'
};

// export const panelOfFive = () => ({
//     component: HealthNodePanelComponent,
//     props: {
//         panels: panelsFive    
     
//     },
//     moduleMetadata: {
//         declarations: [HealthNodeComponent, HealthNodeListComponent]
//     }
//   });
  
//   panelOfOne.story = {
//       name: '5 panels'
//   };
  

//   export const panelOfTen = () => ({
//     component: HealthNodePanelComponent,
//     props: {
//         panels: panelsTen    
     
//     },
//     moduleMetadata: {
//         declarations: [HealthNodeComponent, HealthNodeListComponent]
//     }
//   });
  
//   panelOfOne.story = {
//       name: '10 panels'
//   };
  