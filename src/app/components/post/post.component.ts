import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post1: any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter;

  constructor(private postService: PostService){ }

  onDelete(){
    this.onDeletePost.emit();
  }
}
