export interface HealthNode {
    name: string;
    key: string;
    health: string;
}

export interface HealthNodePanelItem {
    title: string;
    nodes: HealthNode[];
}
