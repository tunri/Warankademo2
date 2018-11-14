import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/core/services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() post: any = {};
  user: any;

  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    if (!this.post.foto || !this.post.foto.length) {
      this.post.foto = '/assets/images/face.jpg'
    }
    //this.getUser();
  }
  getUser(): void {
    this.UserService.getUser(this.post.telefono).subscribe(res => {
      this.user = res;
    });
  }

}
