import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SerachGifsResponse } from '../interface/interfaceResponse';
@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private api : string ='WzH07jgVhx4Aab5rnqETP4mBSnuUiFd4&q';  
  private _historial: string [] =[];
  public results : Gif[] = []


  constructor( private _http: HttpClient){
    
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')!);
    }
    if(localStorage.getItem('results')){
      this.results = JSON.parse( localStorage.getItem('results')!);
    }

  }


  get historial(){
    return [...this._historial];
  }

  buscarGifs( query: string = ""){
//para que el query lo mande en minuscula
    query= query.trim().toLowerCase();
//si no existe el valor en el arreglo lo insertamos
    if( !this._historial.includes( query )){
      
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem("historial", JSON.stringify(this._historial));
      
    }

    const params = new HttpParams()
    .set( 'api', this.api)
    .set( 'limit', '12')
    .set( 'q', query)

    this._http.get<SerachGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.api }=${ query }&limit=12`)
    .subscribe( (resp) => {
      console.log(resp.data);
      this.results = resp.data;
      localStorage.setItem("results", JSON.stringify(this.results));

    }),

  

   
  


  console.log(this._historial);

  }

}
