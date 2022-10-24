import { ElementFullPage } from "../models/elementFullPage";

export class RecettesServices{
    contenu : ElementFullPage [] = [
        {
            nom: 'Homard',
            nom_complet: 'Homard en Chaud Froid',
            img: './assets/boat-app/homardRecette@3x.png',
            description: 'Oui'    
        },
        {
            nom: 'St.Jacques',
            nom_complet: 'Noix de St.Jacques flambées au cogne',
            img: './assets/boat-app/saintJacques@3x.png',
            description: 'Oui'},
        {
            nom: 'Bar',
            nom_complet: 'Bar Rôti au Laurier Frais',
            img: './assets/boat-app/barRecette@3x.png',
            description: 'Oui'
        },
        {
            nom: 'Tourteau',
            nom_complet: 'Tourteau Linguine',
            img: './assets/boat-app/tourteau@3x.png',
            description: 'Oui'
        },
    ];
}