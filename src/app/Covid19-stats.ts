export interface Globals {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  dateFrontent: string;
}

export interface Country {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: string;
  Date: number;
  isCollapsed: boolean;
}

export interface Covid19Stats {
  ID: string;
  Message: string;
  Global: Globals;
  Countries: Country[];
  Date: string;
}