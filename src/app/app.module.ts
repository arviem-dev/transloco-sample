import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NormalIgxGridComponent } from "./normal-igx-grid/normal-igx-grid.component";
import { TranslocoIgxGridComponent } from "./transloco-igx-grid/transloco-igx-grid.component";
import {
  IgxGridModule,
  IgxNavbarModule,
  IgxSelectModule
} from "igniteui-angular";
import { NavbarComponent } from "./navbar/navbar.component";
import { TranslocoModule, TRANSLOCO_CONFIG } from "@ngneat/transloco";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { httpLoader } from "./i18n/transloco-loader";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NormalIgxGridComponent,
    TranslocoIgxGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    IgxGridModule,
    IgxNavbarModule,
    IgxSelectModule,
    TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ["en", "es"],
        defaultLang: "en",
        prodMode: environment.production,
        reRenderOnLangChange: true
      }
    },
    httpLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
