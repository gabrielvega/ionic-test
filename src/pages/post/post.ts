import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: any;
  comments: Array<any>;
  isLoading = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private restProvider: RestProvider,
    private ref: ChangeDetectorRef,
    public viewCtrl: ViewController) {

    this.post = navParams.get('post');

  }

  ionViewDidLoad() {

    this.restProvider.getComments(this.post.id).subscribe(
      data => {
        this.comments = data;
        this.isLoading = false;
        // this.ref.detectChanges();
      },
      err => {
        console.log(err);
      }
    );
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
