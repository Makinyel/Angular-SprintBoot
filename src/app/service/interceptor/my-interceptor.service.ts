/* import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    
    

    let request = req.clone({setHeaders:{demo: 'Esto Es Una Prueba'}});
    
    return next.handle(request).pipe(
      tap((evt)=>{
        if(evt instanceof HttpResponse){
          console.log(evt);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if(confirm("El Id No Se Puede Cambiar")){
          if(error.status === 404){
            console.log("ERRRORRRORROROR")
          }
        }
        return throwError(error);
      })
    );
  }
}
 */