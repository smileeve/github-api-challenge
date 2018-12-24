import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) {
  }

  getUser() {
    return this.httpClient.get('https://api.github.com/users/smileeve');
  }

  getRepos(){
    return this.httpClient.get('https://api.github.com/users/smileeve/repos');
  }

}
