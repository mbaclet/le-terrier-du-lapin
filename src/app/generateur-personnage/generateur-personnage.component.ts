import { Component, OnInit } from '@angular/core';
import {PersonnageService} from "./services/personnage.service";

@Component({
  selector: 'app-generateur-personnage',
  templateUrl: './generateur-personnage.component.html',
  styleUrls: ['./generateur-personnage.component.scss']
})
export class GenerateurPersonnageComponent implements OnInit {

  persoName: string = "";
  stats: string = "";
  culte: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  generatePersonnage(nation: number) {

    let ps:PersonnageService = new PersonnageService();

    this.persoName = ps.generateName(nation);
    this.stats = ps.generateStats();
    this.culte = ps.generateCulte(nation);
  }
}
