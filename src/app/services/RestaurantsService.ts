import { ElementPage } from "../models/elementPage";

export class RestaurantsService{
    contenu: ElementPage[] = [
        {
            nom: 'Le Bistrot des Gascons',
            img: './assets/boat-app/desGascons.png',
            description: 'Brasserie chic et sobre servant des omelettes, des salades, et des plats typiques de viande ou poisson. Tables sur le trottoir.'
        },
        {
            nom: 'Les Fous des Îles',
            img: './assets/boat-app/fousDeLIle@3x.png',
            description: 'Un restaurant typique de 10h à 21h tous les jours pour une ambiance chaleureuse entre amis.'
        },
        {
            nom: 'Bistrot Landais',
            img: './assets/boat-app/bistrotLandais@3x.png',
            description: 'Restaurant de cuisine traditionnelle Landaise, spécialisée dans les plats du Sud-Ouest...'
        },
        {
            nom: 'Villa 9-Trois',
            img: './assets/boat-app/villa9Trois@3x.png',
            description: 'Restaurant de cuisine traditionnelle Landaise, spécialisée dans les plats du Sud-Ouest...'
        },
    ];
}