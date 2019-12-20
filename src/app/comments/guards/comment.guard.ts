import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IComments } from '../services/comments';
import { CommentService } from '../services/comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<IComments[]> {

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments[]> {
    return this.commentService.getComments();
  }

}
