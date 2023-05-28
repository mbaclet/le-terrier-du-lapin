import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  pop: number;
  race: string;
  leader: string;
  culte: string;
  puissance: number;
  nation: string


  constructor(pop: number, race: string, leader: string, culte: string, puissance: number, nation: string) {
    this.pop = pop;
    this.race = race;
    this.leader = leader;
    this.culte = culte;
    this.puissance = puissance;
    this.nation = nation;
  }

  public whatIsRace(race: string): string {

    switch (race) {
      case "humain":
        this.pop = this.pop * 2;
        break;
      case "halfling":
        this.pop = this.pop * 2;
        break;
      case "nain":
        this.pop = this.pop / 2;
        break;
      case "elfe":
        this.pop = this.pop / 2;
        break;
      case "pv":
        this.pop = this.pop * 3;
        break;
      case "skaven":
        this.pop = this.pop * 4;
        break;
      case "vampire":
        this.pop = this.pop / 100;
        break;
      default:
        alert("Erreur, race non-autorisée");
        break;
    }
    return race;
  }

  public generatePopulation(size: number, race: string): number {

    switch (size) {
      case 1:
        this.pop = 5000;
        this.whatIsRace(race);
        break;
      case 2:
        this.pop = 10000
        this.whatIsRace(race);
        break
      case 3:
        this.pop = 15000
        this.whatIsRace(race);
        break;
      case 4:
        this.pop = 20000
        this.whatIsRace(race);
        break;
      case 5:
        this.pop = 25000
        this.whatIsRace(race);
        break;
    }

    return this.pop;
  }

  public generateCulte(nation:string): string {

    let empireCultes: string[] = [
      "Sigmar",
      "Ulric",
      "Manann",
      "Morr",
      "Myrmidia",
      "Shallya",
      "Taal et Rhya",
      "Ulric",
      "Véréna",
    ]

    let kislevCultes: string[] = [
      "Ursun",
      "Dazh",
      "Tor",
      "Salyak",
    ]

    let tileeCultes: string[] = [
      "Myrmidia",
      "Shallya",
      "Verena",
      "Mathann",
      "Ishea",
      "Karnos",
      "Morr",
    ]

    let estalieCultes: string[] = [
      "Myrmidia",
      "Mathann ",
      "Morr",
      "Verena",
      "El Bicho del Mar",
      "Khaine",
      "Solkan",
    ]

    let nainsCultes: string[] = [
      "Grungni",
      "Valaya",
      "Grimnir",
      "Gazul",
      "Smednir",
      "Thungni",
      "Morgrim",
    ]

    let pvCultes: string[] = [
      "Gork",
      "Mork",
    ]

    let norsesCultes: string[] = [
      "Le Chien",
      "Le Serpent",
      "Le Corbeau",
      "L'Aigle",
    ]

    let skavensCultes: string[] = [
      "Le Rat Cornu"
    ]

    let elfesCultes: string[] = [
      "Kurnous",
      "Isha",
    ]

    switch (nation){
      case "empire":
        this.culte = empireCultes.length ? empireCultes[Math.floor(Math.random() * empireCultes.length)]: this.culte;
        break;
      case "kislev":
        this.culte = kislevCultes.length ? kislevCultes[Math.floor(Math.random() * kislevCultes.length)]: this.culte;
        break;
      case "tilee":
        this.culte = tileeCultes.length ? tileeCultes[Math.floor(Math.random() * tileeCultes.length)]: this.culte;
        break;
      case "estalie":
        this.culte = estalieCultes.length ? estalieCultes[Math.floor(Math.random() * estalieCultes.length)]: this.culte;
        break;
      case "nains":
        this.culte = nainsCultes.length ? nainsCultes[Math.floor(Math.random() * nainsCultes.length)]: this.culte;
        break;
      case "pv":
        this.culte = pvCultes.length ? pvCultes[Math.floor(Math.random() * pvCultes.length)]: this.culte;
        break;
      case "norses":
        this.culte = norsesCultes.length ? norsesCultes[Math.floor(Math.random() * norsesCultes.length)]: this.culte;
        break;
      case "skavens":
        this.culte = skavensCultes.length ? skavensCultes[Math.floor(Math.random() * skavensCultes.length)]: this.culte;
        break;
      case "elfes":
        this.culte = elfesCultes.length ? elfesCultes[Math.floor(Math.random() * elfesCultes.length)]: this.culte;
        break;
      default:
        alert("Erreur, nation non-autorisée");
        break;
    }

    return this.culte;
  }

  
}
