import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommentService } from './services/comment.service';
import { IComments } from './services/comments';
import { Observable, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  commentList: Array<IComments> = [];
  comments$: Observable<IComments[]>;
  total =0;

  // subscription: Subscription;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    // this.subscription = this.commentService.getComments().
    //   subscribe((res) => this.commentList = res);
    this.comments$ = this.commentService.getComments();
    this.commentService.getPhotos().subscribe(event => {
      if(event.type === HttpEventType.ResponseHeader) {
        console.log(event.status);
      }
      if(event.type === HttpEventType.DownloadProgress) {
        this.total += event.loaded;
      }
      if(event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    });
  }

  addComment() {
    const comment: IComments = {
      body: 'Test',
      email: 'Test@gmail.com',
      name: 'Test',
      postId: 2
    };
    this.commentService.addComments(comment).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
