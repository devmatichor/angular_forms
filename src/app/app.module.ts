import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TemplateDrivenForm } from 'app/template-driven-form/template-form.component';
import { ModelDrivenForm } from './model-driven-form/model-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenForm,
    ModelDrivenForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
