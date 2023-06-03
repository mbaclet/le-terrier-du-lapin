import {Injectable} from '@angular/core';
import {VilleService} from "../../generateur-ville/services/ville.service";

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor() {
  }

  public randomStatsNumber(): number {
    let min: number = Math.ceil(8);
    let max: number = Math.floor(18);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public generateName(nation: number): string {

    let vs: VilleService = new VilleService();
    return vs.generateLeader(nation);
  }

  public generateStats(): string {

    let corps: number = this.randomStatsNumber();
    let esprit: number = this.randomStatsNumber();
    let aspect: number = this.randomStatsNumber();

    return "Corps : " + corps + " / Esprit : " + esprit + " / Aspect : " + aspect;
  }

  public generateCulte(nation : number): string {
    let vs: VilleService = new VilleService();
    return vs.generateCulte(nation);
  }
}
