import { HttpInterceptor } from '@angular/common/http';
import {HttpRequest} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor{
    constructor(private localStorage:LocalStorageService){}

    intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        const token=this.localStorage.retrieve("authenticationtoken");
        //console.log("interceptor"+token);
        if(token){
            const cloned=req.clone({
                headers:req.headers.set("Authorization","Bearer "+token)
            });
            return next.handle(cloned);
        }else{
            return next.handle(req);
        }
    }

}