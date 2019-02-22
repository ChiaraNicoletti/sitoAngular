import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
})
});

$(document).ready(function () {
$("#submit").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var utente = {username:"jonni", password:"password"};
    if (utente.username == username && utente.password == password) {
        window.open("modal");
    }
        else{
            alert("error");
        }
});
});
