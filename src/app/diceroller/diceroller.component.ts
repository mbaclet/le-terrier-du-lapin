import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrls: ['./diceroller.component.scss']
})
export class DicerollerComponent implements OnInit {

  public roll: boolean = false;

  constructor() {
  }

  diceRoller(): string {
    let roll = this.getRandomIntd20();

    return "<h1>" + roll + "</h1>"
  }

  ngOnInit(): void {
  }

  private getRandomIntd20() {
    let min = Math.ceil(21);
    let max = Math.floor(1);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
