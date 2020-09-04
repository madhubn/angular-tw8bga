import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GaugesModule } from "ng-canvas-gauges";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SafePipe } from "./safe.pipe";
import { TextComponent } from "./text/text.component";
import { LinearGaugeComponent } from "./linear-gauge/linear-gauge.component";
import { RadialGaugeComponent } from "./radial-gauge/radial-gauge.component";

import { DeviceDetectorModule } from "ngx-device-detector";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule, Routes } from "@angular/router";
import { HighlightDirective } from "./text/highlight.directive";
import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: "linear", component: LinearGaugeComponent },
  { path: "radial", component: RadialGaugeComponent },
  {
    path: "text",
    component: TextComponent
  },
  { path: "", redirectTo: "/linear", pathMatch: "full" }
];

@NgModule({
  imports: [
    BrowserModule,
    GaugesModule,
    FormsModule,
    MatFormFieldModule,
    DeviceDetectorModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SafePipe,
    TextComponent,
    LinearGaugeComponent,
    RadialGaugeComponent,
    HighlightDirective
  ],
  exports: [SafePipe, HighlightDirective],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule {}
