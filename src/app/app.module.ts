import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { HomeComponent } from './home/home.component';
import { WritePostComponent } from './write-post/write-post.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    HomeComponent,
    WritePostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path:'' , component:HomeComponent},
      {path:'post/:id' , component:PostComponent},
      {path:'register', component:RegisterComponent},
      {path:'register-success', component:RegisterSuccessComponent},
      {path:'login', component:LoginComponent},
      {path:'home' , component:HomeComponent},
      {path:'write-post' ,component:WritePostComponent}
    ]),
    EditorModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpClientInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
