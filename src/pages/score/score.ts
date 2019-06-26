import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  goal:any;
  goal1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goal = 0;
    this.goal1 = 0;
  }
  incrementGoal() {
    this.goal = this.goal+1;
  }
  incrementGoal1() {
    this.goal1 = this.goal1+1;
  }

  reset() {
    this.goal1 = 0;
    this.goal = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

}
