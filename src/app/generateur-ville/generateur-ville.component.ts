import {Component, OnInit} from '@angular/core';
import {VilleService} from "./services/ville.service";

@Component({
  selector: 'app-generateur-ville',
  templateUrl: './generateur-ville.component.html',
  styleUrls: ['./generateur-ville.component.scss']
})
export class GenerateurVilleComponent implements OnInit {

  population: number = 0;
  taille: number = 0;
  culte: string = "";
  leader: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  generateVille(_size: number, _race: number, _nation: number) {

    let vs: VilleService = new VilleService();

    let size: number = _size;
    let race: number = _race;
    let nation: number = _nation;
    let pop: number = vs.generatePop(size, race);
    let culte: string = vs.generateCulte(nation);
    let leader: string = vs.generateLeader(nation);

    this.population = pop;
    this.taille = size;
    this.culte = culte;
    this.leader = leader;
  }

}
