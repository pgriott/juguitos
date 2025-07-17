export interface Product {
    id: string;
    imageUrl?: string;
    name: string;
    price: number;
    categoria?: string;
    description?: string;
}

export const products: Product[] = [{
    id: "1",
    name: "SOL TODO EL AÑO",
    price: 2700,
    description: "Mango, Maracuyá",
    categoria: "jugo"
}, {
    id: "2",
    name: "VITALISIMO CON PUNCH",
    price: 3400,
    description: "Frutilla, Platano, Naranja, Maca, Algarrobina",
    categoria: "jugo"
}, {
    id: '3',
    name: "RADIANTE TODO EL DÍA",
    price: 2900,
    description: "Arándano, Melón, Chía",
    categoria: "batido"
}, {
    id: '4',
    name: "FRESCO SOL DEL ALBA",
    price: 2700,
    description: "Frutilla, Durazno",
    categoria: "batido"
}, {
    id: '5',
    name: "PUNCHE SUAVE",
    price: 2900,
    description: "Papaya, Frutilla, Maracuyá",
    categoria: "batido"
}, {
    id: '6',
    name: "DURAZNO DEL DUENDE",
    price: 2700,
    description: "Doble Durazno",
    categoria: "jugo"
}, {
    id: '7',
    name: "STRAWBERRY FIELDS FOREVER",
    price: 2900,
    description: "Doble Frutilla, Vainilla",
    categoria: "jugo"
}, {
    id: '8',
    name: "RHAPSODIA",
    price: 2700,
    description: "Plátano, Frambuesa",
    categoria: "jugo"
}, {
    id: '9',
    name: "OK DIGESTION",
    price: 2900,
    description: "Guayaba, Plátano, Chía",
    categoria: "jugo"
}, {
    id: '10',
    name: "BIEN FRESH",
    price: 3100,
    description: "Piña, Frutilla, Maracuyá",
    categoria: "jugo"
}, {
    id: '11',
    name: "ETERNA JUVENTUD",
    price: 3100,
    description: "Arándano, Frambuesa, Frutilla",
    categoria: "jugo"
}, {
    id: '20',
    name: "SENSUAL BOROJO",
    price: 3100,
    description: "Doble Borojó, Canela, Leche",
    categoria: "batido"
}, 
{
    id: "21",
    name: "SURTIDO ESPACIAL",
    price: 3400,
    description: "Frutilla, Papaya, Plátano, Leche, Algarrobina",
    categoria: "batido"
},
{
    id: "22",
    name: "SMOOTHIE No1",
    price: 3500,
    description: "Doble Mango, Maracuyá, Leche",
    categoria: "batido"
  },
  {
    id: "23",
    name: "MORIR SOÑANDO",
    price: 3000,
    description: "Cítrico exprimido a elección, leche (hielo y azúcar)",
    categoria: "batido"
  },
  {
    id: "24",
    name: "LOCUMÓN",
    price: 3100,
    description: "Doble Lúcuma, Leche",
    categoria: "batido"
  },
  {
    id: "25",
    name: "DULCE Y PIOLA",
    price: 3100,
    description: "Frutilla, Mango, Leche",
    categoria: "batido"
  },
  {
    id: "26",
    name: "ANTIOXIDANTE CABRÓN",
    price: 3600,
    description: "Arándano, Frambuesa, Mora, Leche, Chía",
    categoria: "batido"
  },
  {
    id: "27",
    name: "PALHAMBRE",
    price: 3600,
    description: "Mora, Plátano, Leche, Avena, Chía, Algarrobina",
    categoria: "batido"
  },
  {
    id: "28",
    name: "SELVAFRIA KIDS",
    price: 3200,
    description: "Doble Cereza, Plátano, Leche",
    categoria: "batido"
  },
  {
    id: "29",
    name: "PREPARADOR FISICO",
    price: 3800,
    description: "Mango, Plátano, Leche, Avena, Maca",
    categoria: "deportistas"
  },
  {
    id: "30",
    name: "REPARADOR MUSCULAR",
    price: 4100,
    description: "Arándano, Plátano, Leche, Proteína",
    categoria: "deportistas"
  },
  {
    id: "31",
    name: "DONKEY KONG",
    price: 3900,
    description: "Plátano, Leche, Avena, Proteína",
    categoria: "deportistas"
  },
  {
    id: "32",
    name: "PANTERA ROSA",
    price: 3900,
    description: "Doble Frutilla, Leche, Proteína",
    categoria: "deportistas"
  },
  {
    id: "33",
    name: "INCAPOWER",
    price: 4200,
    description: "Papaya, Leche, Maca, Algarrobina, Proteína",
    categoria: "deportistas"
  },
  {
    id: "34",
    name: "KIBA FIT",
    price: 3800,
    description: "Cereza, Plátano, Proteína",
    categoria: "deportistas"
  },
  {
    id: "35",
    name: "LÍNEA DOS MIX",
    price: 4200,
    description: "Doble Mango, Leche, Maca, Proteína",
    categoria: "deportistas"
  },
  {
    id: "36",
    name: "NARANJA MECÁNICA",
    price: 3800,
    description: "Triple Naranja, Proteína",
    categoria: "deportistas"
  },
  {
    id: "37",
    name: "BITTER ENERGÉTICO",
    price: 3800,
    description: "Doble Algarrobina, Leche, Proteína",
    categoria: "deportistas"
  },
  {
    id: "38",
    name: "LIGHT FLAMENCO",
    price: 3500,
    description: "Frambuesa, Proteína",
    categoria: "deportistas"
  },
  {
    id: "39",
    name: "BOOST COFFEE",
    price: 4200,
    description: "Café, Maca, Vainilla, Leche, Proteína",
    categoria: "deportistas"
  },
 {
    id: "50",
    name: "VITAMINA DE NARANJA",
    price: 2900,
    description: "Puro exprimido de Naranja",
    categoria: "extractos"
  },
  {
    id: "51",
    name: "3 EN 1",
    price: 3400,
    description: "Naranja, Betarraga, Zanahoria",
    categoria: "extractos"
  },
  {
    id: "52",
    name: "DETOX PIOLA",
    price: 3300,
    description: "Manzana, Apio, Piña, Jengibre",
    categoria: "extractos"
  },
  {
    id: "53",
    name: "VANGOGH",
    price: 3400,
    description: "Piña, Zanahoria, Naranja",
    categoria: "extractos"
  },
  {
    id: "54",
    name: "INMUNIDAD DE HIERRO",
    price: 3300,
    description: "Zanahoria, Betarraga, Manzana, Jengibre",
    categoria: "extractos"
  },
  {
    id: "55",
    name: "EXTRACTO DE ZANAHORIA",
    price: 2900,
    description: "100% Zanahoria",
    categoria: "extractos"
  },
  {
    id: "56",
    name: "EXTRACTO VERDE",
    price: 3300,
    description: "Manzana, Apio, Jengibre, Menta",
    categoria: "extractos"
  }
]