type countryType = {
  id: number;
  name: string;
  imgPath?: string;
  path?: string;
  cities?: citiesType[];
};

export type citiesType = {
  id: number;
  name: string;
};

export const countries: countryType[] = [
  {
    id: 1,
    name: 'United States',
    imgPath: './images/country/flag-of-United-States-of-America.png',
    path: '/united-states',
    cities: [
      {
        id: 11,
        name: 'San Francisco',
      },
      {
        id: 12,
        name: 'New York',
      },
      {
        id: 13,
        name: 'Michigan',
      },
    ],
  },
  {
    id: 2,
    name: 'United Kingdom',
    imgPath: './images/country/flag-of-United-Kingdom.png',
    path: '/united-kingdom',
    cities: [
      {
        id: 21,
        name: 'London',
      },
      {
        id: 22,
        name: 'Liverpool',
      },
      {
        id: 23,
        name: 'SouthHampton',
      },
    ],
  },
  {
    id: 3,
    name: 'Argentina',
    imgPath: './images/country/flag-of-Argentina.png',
  },
  {
    id: 4,
    name: 'New-Zealand',
    imgPath: './images/country/flag-of-New-Zealand.png',
  },
  {
    id: 5,
    name: 'Germany',
    imgPath: './images/country/flag-of-Germany.png',
  },
  {
    id: 6,
    name: 'Japan',
    path: '/japan',
    imgPath: './images/country/flag-of-Japan.png',
    cities: [
      {
        id: 61,
        name: 'Tokyo',
      },
      {
        id: 62,
        name: 'Kyoto',
      },
      {
        id: 63,
        name: 'Shibuya',
      },
    ],
  },
  {
    id: 7,
    name: 'Netherlands',
    imgPath: './images/country/flag-of-Netherlands.png',
  },
  {
    id: 8,
    name: 'Sweden',
    imgPath: './images/country/flag-of-Sweden.png',
  },
  {
    id: 9,
    name: 'Spain',
    imgPath: './images/country/flag-of-Spain.png',
  },
  {
    id: 10,
    name: 'Thailand',
    imgPath: './images/country/flag-of-Thailand.png',
  },
  {
    id: 11,
    name: 'Portugal',
    imgPath: './images/country/flag-of-Portugal.png',
  },
  {
    id: 12,
    name: 'Indonesia',
    imgPath: './images/country/flag-of-Indonesia.png',
  },
  {
    id: 13,
    name: 'Turkey',
    imgPath: './images/country/flag-of-Turkey.png',
  },
  {
    id: 14,
    name: 'Italy',
    imgPath: './images/country/flag-of-Italy.png',
  },
  {
    id: 15,
    name: 'Switzerland',
    imgPath: './images/country/flag-of-Switzerland.png',
  },
  {
    id: 16,
    name: 'France',
    imgPath: './images/country/flag-of-France.png',
  },
  {
    id: 17,
    name: 'Mexico',
    imgPath: './images/country/flag-of-Mexico.png',
  },
  {
    id: 18,
    name: 'Singapore',
    imgPath: './images/country/flag-of-Singapore.png',
  },
  {
    id: 19,
    name: 'Canada',
    imgPath: './images/country/flag-of-Canada.png',
  },
  {
    id: 20,
    name: 'Russia',
    imgPath: './images/country/flag-of-Russia.png',
  },
  {
    id: 21,
    name: 'Australia',
    imgPath: './images/country/flag-of-Australia.png',
  },
  {
    id: 22,
    name: 'Denmark',
    imgPath: './images/country/flag-of-Denmark.png',
  },
  {
    id: 23,
    name: 'Belgium',
    imgPath: './images/country/flag-of-Belgium.png',
  },
  {
    id: 24,
    name: 'Bangladesh',
    imgPath: './images/country/flag-of-Bangladesh.png',
  },
  {
    id: 25,
    name: 'Egypt',
    imgPath: './images/country/flag-of-Egypt.png',
  },
  {
    id: 26,
    name: 'Brazil',
    imgPath: './images/country/flag-of-Brazil.png',
  },
  {
    id: 27,
    name: 'Colombia',
    imgPath: './images/country/flag-of-Colombia.png',
  },
];
