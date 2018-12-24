import { Component, OnInit } from '@angular/core';
import {GithubService} from 'src/app/core/services/github.service'

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  user:any;
  repositories:any;
  
  constructor(private githubservice: GithubService) {

    this.user=  { "login":"smileeve", "company":"Company1","created_at":"2018-12-20T05:49:34Z","avatar_url":"https://avatars3.githubusercontent.com/u/46016048?v=4","html_url":"https://github.com/smileeve"};
    this.repositories=[
      {"name":"repo1","description":"kajflskjflskd","forks":"2","watchers":"20","has_issues":true},
      {"name":"repo2","description":"kajflskjflskd","forks":"4","watchers":"14","has_issues":false},
      {"name":"repo3","description":"kajflskjflskd","forks":"9","watchers":"207","has_issues":true}
    ];
    console.log(this.user);
    console.log(this.repositories);

    /*this.githubservice.getUser().subscribe(
      user=>{
        this.user=user;
        console.log(this.user);
        console.log(this.user.avatar_url);
    });

    this.githubservice.getRepos().subscribe(
      repositories=>{
      this.repositories = repositories;
      console.log(this.repositories);
    });*/
  }
  ngOnInit() {
  }

}
