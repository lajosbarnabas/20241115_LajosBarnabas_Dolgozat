import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartListComponent } from './part-list/part-list.component';
import { PartItemComponent } from './part-item/part-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    PartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
