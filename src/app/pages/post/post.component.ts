import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(private http: HttpClient, private PostService: PostService) {}

  ngOnInit(): void {
    this.loadPost();
  }

  // fetchPost() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .subscribe((data: Object) => {
  //       this.posts = Array.isArray(data) ? data : [];
  //       console.log(this.posts);
  //       this.posts = data;
  //     });
  // }

  // loadPost(){
  //  this.PostService.getPost().subscribe((posts: any)=> {
  //   console.log('posts :>> ', this.posts);
  //   this.posts = posts
  //  });
  // }

  loadPost(){
    this.PostService.getPost().subscribe({
      next: (posts: any)=>{
        this.posts = posts
        console.log('Post fetched successfully');
      },
      error: (error)=> {
        console.log('Error while fetching post', error);
      }
    })
  }
}
