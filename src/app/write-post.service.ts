import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from './write-post/write-post-payload';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WritePostService {
  
  constructor(private httpClient: HttpClient) {
  }  

  addPost(postPayload: PostPayload){
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  }
  
  getAllPosts():Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8080/api/posts/all');
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }
}
