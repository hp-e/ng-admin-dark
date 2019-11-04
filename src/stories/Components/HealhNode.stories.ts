import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HealthNodeComponent } from 'src/app/shared/components/health-node/health-node.component';

export default {
  title: 'Health Node',
};

export const healthyNode = () => ({
  component: HealthNodeComponent,
  props: {
    title: 'Histology Service',
    health: 'Healthy',
    nodeKey: 'patolab.raw.histology.service'
  },
});

healthyNode.story = {
    name: 'Healthy'
};
export const unhealthyNode = () => ({
  component: HealthNodeComponent,
  props: {
    title: 'Histology Service',
    health: 'Unhealthy',
    nodeKey: 'patolab.raw.histology.service'
  },
});

unhealthyNode.story = {
    name: 'Unhealthy'
};

export const degradedNode = () => ({
  component: HealthNodeComponent,
  props: {
    title: 'Histology Service',
    health: 'Degraded',
    nodeKey: 'patolab.raw.histology.service'
  },
});

degradedNode.story = {
    name: 'Degraded'
};

export const systemDown = () => ({
    component: HealthNodeComponent,
    props: {
      title: 'Histology Service',
      health: 'SystemDown',
      nodeKey: 'patolab.raw.histology.service'
    },
  });
  
  systemDown.story = {
      name: 'System Down'
  };