import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor() {}

  public whatIsRace(race: number, pop: number): number {

    let min:number = Math.ceil(5000);
    let max:number = Math.floor(1);
    let mod: number = Math.floor(Math.random() * (max - min)) + min;
    pop = pop + mod;

    switch (race) {
      case 1:
        pop = pop * 2;
        break;
      case 2:
        pop = pop / 2;
        break;
      case 3:
        pop = pop * 3;
        break;
      case 4:
        pop = pop * 4;
        break;
      case 5:
        pop = pop / 100;
        break;
    }

    return Math.round(pop);
  }

  public generatePop(size: number, race: number): number {

    let pop: number = 0;
    switch (size) {
      case 1:
        pop = 5000;
        pop = this.whatIsRace(race, pop);
        break;
      case 2:
        pop = 10000
        pop = this.whatIsRace(race, pop);
        break
      case 3:
        pop = 15000
        pop = this.whatIsRace(race, pop);
        break;
      case 4:
        pop = 20000
        pop = this.whatIsRace(race, pop);
        break;
      case 5:
        pop = 25000
        pop = this.whatIsRace(race, pop);
        break;
    }

    return pop;
  }

  public generateCulte(nation: number): string {

    let culte: string = "";

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

    switch (nation) {
      case 1:
        culte = empireCultes.length ? empireCultes[Math.floor(Math.random() * empireCultes.length)] : culte;
        break;
      case 2:
        culte = kislevCultes.length ? kislevCultes[Math.floor(Math.random() * kislevCultes.length)] : culte;
        break;
      case 3:
        culte = tileeCultes.length ? tileeCultes[Math.floor(Math.random() * tileeCultes.length)] : culte;
        break;
      case 4:
        culte = estalieCultes.length ? estalieCultes[Math.floor(Math.random() * estalieCultes.length)] : culte;
        break;
      case 5:
        culte = nainsCultes.length ? nainsCultes[Math.floor(Math.random() * nainsCultes.length)] : culte;
        break;
      case 6:
        culte = pvCultes.length ? pvCultes[Math.floor(Math.random() * pvCultes.length)] : culte;
        break;
      case 7:
        culte = norsesCultes.length ? norsesCultes[Math.floor(Math.random() * norsesCultes.length)] : culte;
        break;
      case 8:
        culte = skavensCultes.length ? skavensCultes[Math.floor(Math.random() * skavensCultes.length)] : culte;
        break;
      case 9:
        culte = elfesCultes.length ? elfesCultes[Math.floor(Math.random() * elfesCultes.length)] : culte;
        break;
    }

    return culte;
  }

  public generateLeader(nation: number): string {

    let prenom: string = "";
    let nom: string = "";
    let leader: string = "";

    let empireLeadersPrenom: string[] = [
      "Karl",
      "Berthold",
      "Lanfrank",
      "Gunthard",
      "Wigand",
      "Gilbert",
      "Elmer",
      "Adolar",
      "Winfried",
      "Roderick",
      "Erfried",
      "Dietrich",
      "Adlehard",
      "Adelbrand",
      "Volker",
      "Arnulf",
      "Hildemar",
      "Isenbert",
      "Ulrich",
      "Walter",
      "Wigbert",
      "Herwig",
      "Otto",
      "Gebhard",
      "Wedekind",
      "Gottlieb",
      "Hartmut",
      "Gerlach",
      "Guido",
      "Siegfried",
      "Lothar",
      "Reimar",
      "Rayner",
      "Bernward",
      "Elric",
      "Dietgard",
      "Hulda",
      "Kaja",
      "Adela",
      "Berthild",
      "Wanda",
      "Eloise",
      "Ludgera",
      "Herta",
      "Frederika",
      "Leonarda",
      "Rosamunde",
      "Gunthilde",
      "Ottilia",
      "Hedwige",
      "Mathilde",
      "Rolanda",
    ]

    let empireLeadersNom: string[] = [
      "Klugmann",
      "Gansz",
      "Schulz",
      "Herkenhoff",
      "Böhm",
      "Loos",
      "Bahr",
      "Klotz",
      "Landsberg",
      "Ungers",
      "Steinhauer",
      "Schlim",
      "Eichler",
      "Hesse",
      "Weiss",
      "Feig",
      "Neufeld",
      "Kleinmann",
      "Stengel",
      "Moritz",
      "Werkner",
      "Liebermann",
      "Schiff",
      "Herzsprung",
      "Dörflinger",
      "Knacke",
      "Fischbein",
      "Kiesling",
      "Adorf",
      "Hochmeister",
      "Osswald",
      "Schreck",
    ]

    let kislevLeadersPrenom: string[] = [
      "Darius",
      "Douko",
      "Elena",
      "Fyodor",
      "Ivana",
      "Kazimir",
      "Chagin",
      "Anton",
      "Aleksandra",
      "Stepan",
      "Oleg",
      "Timur",
      "Vaja",
      "Yury",
      "Vitali",
      "Ursuni",
      "Loparin",
      "Mikhail",
      "Nicolai",
      "Lukyan",
      "Kubah",
      "Iosif",
      "Bela",
      "Belednar",
      "Demitirij",
      "Evelina",
      "Gavrill",
    ]

    let kislevLeadersNom: string[] = [
      "Azarov",
      "Babanin",
      "Biedny",
      "Dubov",
      "Fedosov",
      "Harkovsyn",
      "Krasnyi",
      "Lopatin",
      "Noskov",
      "Osokin",
      "Torsky",
      "Ursunov",
      "Urskoy",
      "Volkov",
      "Tereskovna",
      "Rozov",
      "Zheglov",
      "Zinoviev",
      "Vasin",
      "Ulritkov",
      "Stefanovitch",
      "Skvortskov",
      "Shapka",
      "Ropsmenn",
      "Rebikov",
    ]

    let tileeLeadersPrenom: string[] = [
      "Maffeo",
      "Galeazzo",
      "Nofri",
      "Chimenti",
      "Buccio",
      "Alfonso",
      "Ormanno",
      "Bianco",
      "Roberto",
      "Girolamo",
      "Stoldo",
      "Fede",
      "Carlo",
      "Agostino",
      "Bastiano",
      "Lamberto",
      "Giovannozz",
      "Bartolomeo",
      "Antonia",
      "Andrea",
      "Brisca",
      "Ciosa",
      "Veroncia",
      "Ysabeta",
      "Euphemia",
      "Madaluza",
      "Lisa",
      "Pantasilea",
      "Paula",
      "Belloza",
      "Pia",
      "Lucrezia",
    ]

    let tileeLeadersNom: string[] = [
      "Vasari",
      "Barbani",
      "Fiorina",
      "Mauroceno",
      "Calandrini",
      "Barnazini",
      "Caldogne",
      "Marin",
      "Matelizi",
      "Mudazo",
      "Barbamachollo",
      "Calza",
      "Albicio",
      "Zustignan",
      "Rossi",
      "Tiepolo",
      "Calbi",
      "Orsini",
      "Farnese",
      "Calchano",
      "Dandolo",
      "Calvane",
      "Lego",
      "Michiel",
    ]

    let estalieLeadersPrenom: string[] = [
      "Alexandre",
      "Alonso",
      "Monferriz",
      "Simon",
      "Inigo",
      "Guillen",
      "Gironimo",
      "Luys",
      "Fernendo",
      "Velasco",
      "Juancho",
      "Ruberte",
      "Bitores",
      "Lorenzo",
      "Pedro",
      "Nadal",
      "Bernal",
      "Mendo",
      "Agustin",
      "Remon",
      "Viçente",
      "Alfonsa",
      "Isabel",
      "Sentiu",
      "Tereysa",
      "Gracia",
      "Brigida",
      "Ynes",
      "Anthona",
      "Julia",
      "Sancha",
      "Sancho",
    ]

    let estalieLeadersNom: string[] = [
      "Almaçan",
      "Valmeseda",
      "Cuero",
      "Rancha",
      "Gomiel",
      "Collaço",
      "Alcala",
      "Valterra",
      "Aguilera",
      "Hermosilla",
      "Herrero",
      "Astudillo",
      "Vallejo",
      "Sepulveda",
      "Ferrada",
      "Buytrago",
      "Velasco",
      "Duran",
      "Hortolano",
      "Cardoso",
      "Ovierna",
      "Palafox",
      "Pedrosa",
      "Sarria",
      "Rosil",
      "Cano",
      "Moço",
    ]

    let nainsLeadersPrenom: string[] = [
      "Nongoc",
      "Mugned",
      "Skrakom",
      "Gathror",
      "Bregam",
      "Zelugid",
      "Egid",
      "Tringor",
      "Medog",
      "Uldrurad",
      "Zirodad",
      "Zandrudir",
      "Thedraird",
      "Krolon",
      "Trilbaon",
      "Egon",
      "Thorat",
      "Otham",
      "Roldor",
      "Narem",
    ]

    let pvLeadersPrenom: string[] = [
      "Kolgrog",
      "Jukrar",
      "Balzit",
      "Akdik",
      "Johgar",
      "Ughid",
      "Dugrag",
      "Krarzrik",
      "Ogdok",
      "Oglok",
      "Zorbar",
      "Gorar",
      "Okgod",
      "Vihzroc",
      "Bolgrat",
      "Korguz",
      "Butog",
      "Braggoc",
      "Boznir",
      "Gorzrug",
      "Vugud",
      "Cromdroz",
    ]

    let norsesLeadersPrenom: string[] = [
      "Steinbir",
      "Aslak",
      "Athils",
      "Beinir",
      "Galti",
      "Svein",
      "Svafar",
      "Vermund",
      "Thormothr",
      "Geirmund",
      "Ingolf",
      "Erling",
      "Sverting",
      "Stein",
      "Hosvir",
      "Ottar",
      "Finnvid",
      "Ragnar",
      "Thorfinn",
      "Skard",
      "Thorberg",
    ]

    let noresesLeadersNom: string[] = [
      "Askelsson",
      "Agmundrsson",
      "Erlingsson",
      "Adilsson",
      "Thorormsson",
      "Ingolfsson",
      "Styrkarsson",
      "Orlygsson",
      "Knutsson",
      "Lambisson",
      "Ornolfsson",
      "Bjornsson",
      "Kolskeggson",
      "Thorsteinsson",
      "Svafarsson",
      "Borstigsson",
      "Bjalkisson",
    ]

    let skavensLeadersPrenom: string[] = [
      "Zniat",
      "Znukch",
      "Skigron",
      "Skigron",
      "Criakch",
      "Trin",
      "Troch",
      "Tuzak",
      "Zhich",
      "Enkon",
      "Skuetrueetch",
      "Qushonq",
      "Khach",
      "Skrenq",
      "Qruk",
      "Vekch",
      "Krokch",
      "Snoch",
      "Strut",
      "Throch",
    ]

    let elfesLeadersPrenom: string[] = [
      "Iroc",
      "Uca",
      "Dacilcus",
      "Aelkat",
      "Dolloros",
      "Trorcith",
      "Vakarna",
      "Ocralla",
      "Talva",
      "Qethi",
      "Erva",
      "Vaeltynde",
      "Nyrvaltas",
      "Lissenral",
      "Qarly",
      "Dyrla",
      "Anelteth",
      "Nilthyce",
    ]

    let bretonnieLeadersPrenom: string [] = [
      "Simon",
      "Evrard",
      "Thiebaut",
      "Gobin",
      "Charles",
      "Brandan",
      "Vivien",
      "Ernault",
      "Jamet",
      "Jaques",
      "Huget",
      "Jourdain",
      "Henri",
      "Emery",
      "Oudin",
      "Julien",
      "Marguerite",
      "Alberea",
      "Denise",
      "Thieffane",
      "Guillemette",
      "Ascelina",
      "Aeliz",
      "Agnez",
      "Mahault",
      "Agnès",
      "Collette",
      "Nicolete",
    ]

    let bretonnieLeadersNom: string [] = [
      "Ternant",
      "de Lolive",
      "Chastel",
      "Pidoye",
      "Marchant",
      "de Troyes",
      "le Coq",
      "Cyrasse",
      "Favières",
      "Gaiant",
      "de l'Extrac",
      "Morhier",
      "Vauru",
      "Cordelier",
      "Mariette",
      "Tuillieres",
      "Poupart",
      "de Pisex",
      "Marle",
      "Tourraine",
      "Foucault",
      "Paris",
      "de Craon",
      "Breban",
    ]

    switch (nation) {
      case 1:
        prenom = empireLeadersPrenom.length ? empireLeadersPrenom[Math.floor(Math.random() * empireLeadersPrenom.length)] : prenom;
        nom = empireLeadersNom.length ? empireLeadersNom[Math.floor(Math.random() * empireLeadersNom.length)] : nom;
        break;
      case 2:
        prenom = kislevLeadersPrenom.length ? kislevLeadersPrenom[Math.floor(Math.random() * kislevLeadersPrenom.length)] : prenom;
        nom = kislevLeadersNom.length ? kislevLeadersNom[Math.floor(Math.random() * kislevLeadersNom.length)] : nom;
        break;
      case 3:
        prenom = tileeLeadersPrenom.length ? tileeLeadersPrenom[Math.floor(Math.random() * tileeLeadersPrenom.length)] : prenom;
        nom = tileeLeadersNom.length ? tileeLeadersNom[Math.floor(Math.random() * tileeLeadersNom.length)] : nom;
        break;
      case 4:
        prenom = estalieLeadersPrenom.length ? estalieLeadersPrenom[Math.floor(Math.random() * estalieLeadersPrenom.length)] : prenom;
        nom = estalieLeadersNom.length ? estalieLeadersNom[Math.floor(Math.random() * estalieLeadersNom.length)] : leader;
        break;
      case 5:
        prenom = nainsLeadersPrenom.length ? nainsLeadersPrenom[Math.floor(Math.random() * nainsLeadersPrenom.length)] : prenom
        break;
      case 6:
        prenom = pvLeadersPrenom.length ? pvLeadersPrenom[Math.floor(Math.random() * pvLeadersPrenom.length)] : prenom
        break;
      case 7:
        prenom = norsesLeadersPrenom.length ? norsesLeadersPrenom[Math.floor(Math.random() * norsesLeadersPrenom.length)] : prenom;
        nom = noresesLeadersNom.length ? noresesLeadersNom[Math.floor(Math.random() * noresesLeadersNom.length)] : nom;
        break;
      case 8:
        prenom = skavensLeadersPrenom.length ? skavensLeadersPrenom[Math.floor(Math.random() * skavensLeadersPrenom.length)] : prenom
        break;
      case 9:
        prenom = elfesLeadersPrenom.length ? elfesLeadersPrenom[Math.floor(Math.random() * elfesLeadersPrenom.length)] : prenom
        break;
      case 10: prenom = bretonnieLeadersPrenom.length ? bretonnieLeadersPrenom[Math.floor(Math.random() * bretonnieLeadersPrenom.length)] : prenom;
        nom = bretonnieLeadersNom.length ? bretonnieLeadersNom[Math.floor(Math.random() * bretonnieLeadersNom.length)] : nom;
    }

    leader = prenom + " " + nom;
    return leader
  }
}
