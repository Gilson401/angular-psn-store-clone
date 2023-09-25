import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Game } from 'src/app/models/game';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   title: string = '';
  id: string = "Id";
  numPlayers: number = 0
  classAge: number = 0
  gameDescription = "gameDescription attr";


  game: Game | any;

  constructor(
    private activeRoute: ActivatedRoute, 
    private service: StoreService, 
    private titleService: Title
    ) {
    this.activeRoute.firstChild?.params.subscribe(res => this.id = res['id'])

  }

  ngOnInit(): void {
    this.fetchGames();
  }

  gameAgeLimit(): string {
  return `assets/${this.game.age}.webp`
  }

  fetchGames(): void {
   
    this.service.fetchGameById(this.id)
    .subscribe(
      {
        next: (res) => {
          
          this.game = res; 
          this.titleService.setTitle(this.game.gameLabel)
          
        },  
        error: (err) => {
        
        alert(`Err Msg: ${err.message}`)
          console.log(err.message)
        },
      }
    )
  }

}
