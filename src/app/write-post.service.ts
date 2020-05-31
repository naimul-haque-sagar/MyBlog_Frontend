import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from './write-post/write-post-payload';

@Injectable({
  providedIn: 'root'
})
export class WritePostService {

  constructor(private httpClient: HttpClient) {
  }  

  addPost(postPayload: PostPayload){
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  } 
}
