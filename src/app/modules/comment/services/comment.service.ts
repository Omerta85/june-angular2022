import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs";
import {IComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }

  getByID(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}
