import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "labs",
    loadChildren: () => import("./lab/lab.module").then(m => m.LabModule)
  },
  {
    path: "database",
    loadChildren: () =>
      import("./database/database.module").then(m => m.DatabaseModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./order/order.module").then(m => m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
