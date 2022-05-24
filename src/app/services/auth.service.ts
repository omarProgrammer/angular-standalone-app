import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public init(): Observable<string> {
  return of('bar').pipe(
    delay(100)
  )
}
}
