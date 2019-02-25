import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {


// *login
$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
})
});
}
}
//* login validation
function login (router:Router)

    var username = $("#username").val();
    var password = $("#password").val();
    var utente = {username:"jonni", password:"password"};
    if (utente.username == username && utente.password == password) {
        this.router.navigate(['/utente']);
    }
        else{
            alert("error");
        }

$(document).ready(function(){
  $('#signup-trigger').click(function(){
    $(this).next('#signup-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
})
});
