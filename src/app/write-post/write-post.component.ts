import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPayload } from './write-post-payload';
import { WritePostService } from '../write-post.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {
  
  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(private writePostService: WritePostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.writePostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }

}
