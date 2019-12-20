import { Component, OnInit, Input } from '@angular/core';
import { IComments } from '../services/comments';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() commentList: IComments[] =[] ;
  constructor() { }

  ngOnInit() {
  }

}
