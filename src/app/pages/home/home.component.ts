import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Title } from '@angular/platform-browser';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadingMessage:string = "Loading Games";

  gamelist: Game[] = [];
  constructor(private service: StoreService,
    private titleService: Title) { }



  ngOnInit(): void {
    this.titleService.setTitle('PSN Home')
    this.fetchGames();
  }

  fetchGames(): void {
   
    this.service.fetchGames()
    .subscribe(
      {
        next: (res) => {
          this.loadingMessage = "";
          const ptypes:  Array<Game> = res 
          this.gamelist = ptypes          
        },  
        error: (err) => {
          this.loadingMessage = `Verifique tua conexão e ou Inicie o Json Server. \n
          Err message: ${err.message}`;
        },
      }
    )
  }

}
