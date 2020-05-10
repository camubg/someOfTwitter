import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../model/tweet';

const url: string = 'http://localhost:3030/api/home';

export interface TwitterResponse {
  data: any;
  resp: Tweet[];
}

@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) { }

  /**
   * Creates an Observable with the response of the Twitter API to get a user's feed.
   * @method getTweets
   * @return An `Observable` of the `TwitterResponse`
   */
  getTweets(): Observable<TwitterResponse> {
    return this.http.get<TwitterResponse>(url);
  }

}
