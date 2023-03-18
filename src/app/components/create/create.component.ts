import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  title: any;
  content: any;

  constructor(private postService: PostService, private router: Router){ }

  onSubmit(){
    const new_post = {
      title: this.title,
      content: this.content
    }
    this.postService.createPost(new_post).subscribe(() => this.router.navigate(['/blog']));
  }
}
