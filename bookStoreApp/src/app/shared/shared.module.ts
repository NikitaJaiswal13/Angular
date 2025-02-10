import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthorComponent } from './Components/author/author.component';
import { AuthorAddressComponent } from './Components/author-address/author-address.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorComponent,
    AuthorAddressComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorComponent,
    AuthorAddressComponent
  ]
})
export class SharedModule { }
