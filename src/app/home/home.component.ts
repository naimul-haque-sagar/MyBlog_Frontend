import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from '../write-post/write-post-payload';
import { WritePostService } from '../write-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  constructor(private postService: WritePostService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
