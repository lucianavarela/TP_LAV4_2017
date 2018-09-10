import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})

export class MenuCardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  juegos: { row: number, nombre: string, descripcion: string, imagen: string, color: string, route: string }[] = [
    { "row": 1, "nombre": "Hit It !", "descripcion": "Follow the directions and press the correct key, but don't take too long!", "imagen": "hitit.svg", "color": "orange", "route": "HitIt" },
    { "row": 1, "nombre": "Anagram", "descripcion": "Guess the word by rearranging the given letters", "imagen": "anagram.svg", "color": "darkred", "route": "Anagram" },
    { "row": 1, "nombre": "Math Speed", "descripcion": "Resolve the calculation before time runs out", "imagen": "math.svg", "color": "blue", "route": "MathSpeed" },
    { "row": 2, "nombre": "Guess The Number", "descripcion": "Attempt to guess the hidden number with as few tries as posible", "imagen": "guess.svg", "color": "yellow", "route": "GuessTheNumber" },
    { "row": 2, "nombre": "Tic Tac Toe", "descripcion": "Beat the machine at this famous game", "imagen": "tic-tac-toe.svg", "color": "red", "route": "TicTacToe" },
    { "row": 2, "nombre": "Rock Paper Scissors", "descripcion": "Choose one and hope for the best...", "imagen": "piedrapapel.svg", "color": "lightblue", "route": "RockPaperScissors" },
  ];
}
