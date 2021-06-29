import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitasComponent } from './components/citas/citas.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    HeaderComponent,
    PortadaComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
