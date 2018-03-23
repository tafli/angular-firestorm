import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: any;

  title: string;
  content: string;

  post: Observable<Post>;

  constructor(private afs: AngularFirestore, public router: Router) {
  }

  ngOnInit() {
    this.posts = this.afs.collection('posts').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;

          return {id, data};
        });
      });
  }

  addPost() {
    if (this.title.length > 0 && this.content.length > 0) {
      this.afs.collection('posts').add({'title': this.title, 'content': this.content});
      this.title = null;
      this.content = null;
    }
  }

  getPost(postId) {
    this.post = this.afs.doc(`posts/${postId}`).valueChanges();
  }

  deletePost(postId) {
    this.afs.doc(`posts/${postId}`).delete();
  }
}
