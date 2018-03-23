import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  title: string;
  content: string;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.valueChanges();
  }

  addPost() {
    // this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }
}
