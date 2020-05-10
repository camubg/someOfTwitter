import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../service/twitter.service';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets: Tweet[];
  loadingMsg: String = 'Loading...';

  constructor(private twitter: TwitterService) {}

  ngOnInit() {
    this.getTweets();
  }

  /** Does not consider the case where the twitter API fails. */
  private getTweets(): void {
    this.twitter.getTweets().subscribe((res: any) => {
      this.tweets = res;
    });
  }

}
