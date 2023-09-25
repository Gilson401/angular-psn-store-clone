import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from 'src/app/models/game';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseURL: string = "";
  private gameList: Game[] | any = [];
  private game: Game | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.psStoreApi
  }

  fetchGames(): Observable<Game[]> {
    this.gameList = this.http.get<Game[]>(`${this.baseURL}`);
    return this.gameList;
  }

  fetchGameById(id: string ): Observable<Game> {
    this.game = this.http.get<Game>(`${this.baseURL}/${id}`);
    return this.game;
  }

}
