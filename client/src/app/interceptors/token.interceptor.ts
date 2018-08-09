import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Token } from '../models/token.model';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    // private tokenSubscription : Subscription;
    private token : Token;
    // constructor(public authService: AuthService) {
    //     this.tokenSubscription = this.authService.tokenSubject.subscribe(token => this.token = token);
    // }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let options = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + (this.token? this.token.bearer : '')
        })
        };
        request = request.clone(options);
        return next.handle(request);
    }
}