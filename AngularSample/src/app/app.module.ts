import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { HeaderComponent } from './component/main/header/header.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { HighlightTextDirective } from './shared/directive/highlight-text.directive';
import { ExistDirective } from './shared/directive/exist.directive';
import { DropdownDirective } from './shared/directive/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    HighlightTextDirective,
    ExistDirective,
    DropdownDirective
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
