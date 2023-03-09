import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CtopComponent } from './ctop/ctop.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PractNgifComponent } from './pract-ngif/pract-ngif.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { AssignDirectiveComponent } from './assign-directive/assign-directive.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TemplateformComponent } from './templateform/templateform.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveAssignComponent } from './reactive-assign/reactive-assign.component';
import { ReactAssignComponent } from './react-assign/react-assign.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { CameraComponent } from './product/camera/camera.component';
import { WatchComponent } from './product/watch/watch.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test2Component,
    CardComponent,
    PasswordGeneratorComponent,
    CtopComponent,
    NgForComponent,
    DropDownComponent,
    NgifComponent,
    NgswitchComponent,
    PractNgifComponent,
    NgClassComponent,
    AssignDirectiveComponent,
    CustomDirective,
    TemplateformComponent,
    StudentFormComponent,
    ReactiveformComponent,
    ReactiveAssignComponent,
    ReactAssignComponent,
    PipeComponent,
    CustomPipe,
    SearchPipe,
    SimpleformComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    CameraComponent,
    WatchComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserComponent,
    UserDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
