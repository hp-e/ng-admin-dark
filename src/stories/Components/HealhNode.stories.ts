import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HealthNodeComponent } from 'src/app/shared/components/health-node/health-node.component';
import { HealthResult } from 'src/app/shared/models/healthNodeModel';

let defaultResult: HealthResult = {
  status: 'Healthy',
  node: {
    name: 'Histology Service',
    key: 'patolab.raw.histology.service',
    url: 'url'
  }
};

export default {
  title: 'Health Node',
};

export const healthyNode = () => ({
  component: HealthNodeComponent,
  props: {
    health: {...defaultResult}
  },
});

healthyNode.story = {
    name: 'Healthy'
};
export const unhealthyNode = () => ({
  component: HealthNodeComponent,
  props: {
    health: {...defaultResult, status: 'Unhealthy'}
  },
});

unhealthyNode.story = {
    name: 'Unhealthy'
};

export const degradedNode = () => ({
  component: HealthNodeComponent,
  props: {
    health: {...defaultResult, status: 'Degraded'}
  },
});

degradedNode.story = {
    name: 'Degraded'
};

export const systemDown = () => ({
    component: HealthNodeComponent,
    props: {
      health: {...defaultResult, status: 'SystemDown'}
    },
  });
  
  systemDown.story = {
      name: 'System Down'
  };