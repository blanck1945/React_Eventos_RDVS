export const countryArr: CountryModel[] = [
  {
    country: "Argentina",
    cities: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
  },
  {
    country: "Uruguay",
    cities: ["Motevideo", "Puntal del Este", "Canelones"],
  },
  {
    country: "Brasil",
    cities: ["Sao Pablo", "Bahia", "Rio de Janeiro"],
  },
  {
    country: "Chile",
    cities: ["Santiago de Chile", "Valparaiso"],
  },
];

export const monthArr: MonthModel[] = [
  {
    monthName: "Enero",
    ref: 31,
    days: [],
  },
  {
    monthName: "Febrero",
    ref: 29,
    days: [],
  },
  {
    monthName: "Marzo",
    ref: 31,
    days: [],
  },
  {
    monthName: "Abril",
    ref: 30,
    days: [],
  },
  {
    monthName: "Mayo",
    ref: 31,
    days: [],
  },
  {
    monthName: "Junio",
    ref: 30,
    days: [],
  },
  {
    monthName: "Julio",
    ref: 31,
    days: [],
  },
  {
    monthName: "Agosto",
    ref: 31,
    days: [],
  },
  {
    monthName: "Septiembre",
    ref: 30,
    days: [],
  },
  {
    monthName: "Octubre",
    ref: 31,
    days: [],
  },
  {
    monthName: "Noviembre",
    ref: 30,
    days: [],
  },
  {
    monthName: "Diciembre",
    ref: 31,
    days: [],
  },
];

export interface CountryModel {
  country: string;
  cities: string[];
}

export interface MonthModel {
  monthName: string;
  ref: number;
  days: number[];
}

export const getDays = (monthArr: MonthModel[]) => {
  let x = 1;
  const newArr = monthArr.map((el: MonthModel) => {
    while (x <= el.ref) {
      el.days.push(x);
      x += 1;
    }
  });
  console.log(newArr);
  return newArr;
};

const getYears = () => {
  let num = 20;
  let years = [];
  while (num <= 50) {
    years.push(num);
    num += 1;
  }
  return years;
};

export const years: number[] = getYears();
export const months: any = getDays(monthArr);
