import { Component, OnInit, OnDestroy } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {
  HealthReport,
  HealthNodePanelItem
} from "../shared/models/healthNodeModel";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private connection: signalR.HubConnection;

  serviceHealth: HealthReport = undefined;
  databaseHealth: HealthReport = undefined;
  websiteHealth: HealthReport = undefined;

  healthPanels: HealthNodePanelItem[] = [
    { title: "Services" },
    { title: "Databases" },
    { title: "Websites" }
  ];

  constructor() {}

  ngOnInit() {
    console.log("Dashboard init");

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:25010/hubs/diagnostics")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.startStream();
  }

  ngOnDestroy(): void {
    this.stopStream();
  }
  startStream() {
    this.connection.start().then(() => {
      console.log("SignalR connected");
      this.connection.invoke("AddToGroup", "service");
      this.connection.invoke("AddToGroup", "database");
      this.connection.invoke("AddToGroup", "website");

      this.connection.on("Health", (group, health) => {
        switch (group) {
          case "service":
            this.serviceHealth = health;
            this.healthPanels[0].report = this.serviceHealth;
            break;
          case "database":
            this.databaseHealth = health;
            this.healthPanels[1].report = this.databaseHealth;
            break;
          case "website":
            this.websiteHealth = health;
            this.healthPanels[2].report = this.websiteHealth;
            break;
        }
      });
    });
  }

  stopStream() {
    this.connection.invoke("AddToGroup", "service");
    this.connection.invoke("AddToGroup", "database");
    this.connection.invoke("AddToGroup", "website");

    this.connection.stop();
  }
}
