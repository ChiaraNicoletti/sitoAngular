import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']

})



export class UtenteComponent implements OnInit {

constructor( private router: Router) { }
ngOnInit(){
  $('th').hide()
}
  caricaeventi(){
  var params={};
  params ['token']='EUIBUPCQKW4PW73H2XIB';
  params['location.address']='Rome';
  $.ajax ({
  url: "https://www.eventbriteapi.com/v3/events/search/",
  data: params,
  success: function(data){
 for(var i=0;i<10;i++){(console.log(data);
 $("#tableUno").append("<tr> <td>"+(data.events[i].name.text)+"</td>"+"<td>"+(data.events[i].start.local)+"</td>");
  }
  },
  error: function(xhr){console.log(xhr);}
  });
  $('.eventi').show()
}

redirect(router:Router){
this.router.navigateByUrl('navbar');
}

caricanotizie(){
  var params={};
  params ['apiKey']='8ec58347383a461e8fbc05407c025e30';
  params['language']='it';
  $.ajax ({
    url: "https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-26&sortBy/",
    data: params,
    success: function(result){
   for(var i=0;i<10;i++){(console.log(result);
   $("#tableDue").append("<tr> <td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].source.name)+"</td>");
    }
    },
    error: function(xhr){console.log(xhr);}
    });
    $('.articoli').show()
  }
}