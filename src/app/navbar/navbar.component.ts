import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;
  password: string;


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

$(document).ready(function(){
  $('#signup-trigger').click(function(){
    $(this).next('#signup-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
})
});
}
//* login validation

  login() {
    console.log("hello");
    this.username = $('#username').val();
    this.password = $('#password').val();
    console.log(this.username);
    console.log(this.password);
    if(this.username == 'jdoe' && this.password == 'jdoe'){
    this.router.navigate(["utente"]);
    }else {
      alert("Credenziali non valide");

}

registrami(){
  this.router.navigate(["utente"]);
}
}
}
