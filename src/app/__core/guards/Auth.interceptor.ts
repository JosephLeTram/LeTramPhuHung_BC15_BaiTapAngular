import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Token này đăng nhập sau đó sẽ tự lưu
    let authToken = localStorage.getItem("accessToken");

    //Token của trung tâm cấp cho tất cả app API
    let tokenCybersoft =
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0`;

    //Clone the request and replace the orignial headers with
    const headers = req.headers
      .set("accessToken", `Bearer ${authToken}`)
      .set("TokenCybersoft", tokenCybersoft);

    // Clone headers, updated with the authorizaion
    const authReq = req.clone({ headers });

    //Send cloned request with header to next handler
    return next.handle(authReq);
  }
}
