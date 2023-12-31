// import USAImage from './images/us_64.png';

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
    name: 'Japan',
    imgPath: './images/country/flag-of-Japan.png',
  },
  {
    id: 4,
    name: 'Argentina',
    imgPath: './images/country/flag-of-Argentina.png',
  },
  {
    id: 5,
    name: 'New-Zealand',
    imgPath: './images/country/flag-of-New-Zealand.png',
  },
];
