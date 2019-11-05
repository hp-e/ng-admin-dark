export interface HealthReport {
    reportDate: Date;
    nodes?: HealthResult[];
}

export interface HealthResult {
    message?: string;
    status: string;
    //result?: string;
    node: HealthNode;
}
export interface HealthNode {
    name: string;
    key: string;
    url?: string;
}

export interface HealthNodePanelItem {
    title: string;
    report?: HealthReport;
}
