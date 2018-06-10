import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PostPage } from '../post/post';

/**
 * Generated class for the CountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: Array<any>;
  isLoading = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private restProvider: RestProvider,
    private modalCtrl: ModalController,
    private ref: ChangeDetectorRef) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountriesPage');
    this.restProvider.getAllPosts().subscribe(
      data => {
        this.posts = data;
        this.isLoading = false;
        this.ref.detectChanges();
      },
      err => {
        console.log(err);
      }
    );
  }

  presentModal(post) {
    console.log(post);
    console.log({ post: post });
    let postModal = this.modalCtrl.create(PostPage, { post: post });
    postModal.present();
  }

}


