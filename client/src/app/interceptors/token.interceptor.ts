import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Token } from '../models/token.model';
import { AppState } from '../store/states/state';
import { Store } from '@ngrx/store';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    // private tokenSubscription : Subscription;
    private token : Token;
    constructor(private authService: AuthService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.authService.token;
        if (!this.token) return next.handle(request);
        let options = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + (this.token? this.token.token : '')
            })
        };
        request = request.clone(options);
        return next.handle(request);
    }
}