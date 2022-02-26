// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = [
  "ac",
  "al",
  "ap",
  "am",
  "ba",
  "ce",
  "df",
  "es",
  "go",
  "ma",
  "mt",
  "ms",
  "mg",
  "pa",
  "pb",
  "pr",
  "pe",
  "pi",
  "rj",
  "rn",
  "rs",
  "ro",
  "rr",
  "sc",
  "sp",
  "se",
  "to",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  { code: "AC", latitude: -8.77, longitude: -70.55, name: "Acre" },
  { code: "AL", latitude: -9.62, longitude: -36.82, name: "Alagoas" },
  { code: "AM", latitude: -3.47, longitude: -65.105, name: "Amazonas" },
  { code: "AP", latitude: 1.4145, longitude: -51.77554, name: "Amapá" },
  { code: "BA", latitude: -13.29, longitude: -41.71, name: "Bahia" },
  { code: "CE", latitude: -5.2045, longitude: -39.53, name: "Ceará" },
  { code: "DF", latitude: -15.83, longitude: -47.86, name: "Distrito Federal" },
  { code: "ES", latitude: -19.19, longitude: -40.34, name: "Espírito Santo" },
  { code: "GO", latitude: -15.98, longitude: -49.86, name: "Goiás" },
  { code: "MA", latitude: -5.42, longitude: -45.44, name: "Maranhão" },
  { code: "MT", latitude: -12.64, longitude: -55.42, name: "Mato Grosso" },
  { code: "MS", latitude: -20.5, longitude: -54.5, name: "Mato Grosso do Sul" },
  { code: "MG", latitude: -18.1, longitude: -44.38, name: "Minas Gerais" },
  { code: "PA", latitude: -3.79, longitude: -52.48, name: "Pará" },
  { code: "PB", latitude: -7.28, longitude: -36.72, name: "Paraíba" },
  { code: "PR", latitude: -24.89, longitude: -51.55, name: "Paraná" },
  { code: "PE", latitude: -8.38, longitude: -37.86, name: "Pernambuco" },
  { code: "PI", latitude: -6.6, longitude: -42.28, name: "Piauí" },
  { code: "RJ", latitude: -22.25, longitude: -42.66, name: "Rio de Janeiro" },
  { code: "RN", latitude: -5.81, longitude: -36.59, name: "Rio Grande do N" },
  { code: "RO", latitude: -10.83, longitude: -63.34, name: "Rondônia" },
  { code: "RS", latitude: -30.17, longitude: -53.5, name: "Rio Grande do Sul" },
  { code: "RR", latitude: 1.99, longitude: -61.33, name: "Rorraima" },
  { code: "SC", latitude: -27.45, longitude: -50.95, name: "Santa Catarina" },
  { code: "SE", latitude: -10.57, longitude: -37.45, name: "Sergipe" },
  { code: "SP", latitude: -22.29, longitude: -48.79, name: "São Paulo" },
  { code: "TO", latitude: -9.46, longitude: -48.26, name: "Tocantins" },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

// Source: https://fr.wikipedia.org/wiki/ISO_3166
const frenchCountryNames: Record<string, string> = {
  AF: "Afghanistan",
  AX: "Åland",
  AL: "Albanie",
  DZ: "Algérie",
  AS: "Samoa américaines",
  AD: "Andorre",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctique",
  AG: "Antigua-et-Barbuda",
  AR: "Argentine",
  AM: "Arménie",
  AW: "Aruba",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerbaïdjan",
  BS: "Bahamas",
  BH: "Bahreïn",
  BD: "Bangladesh",
  BB: "Barbade",
  BY: "Bélarus",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "Bénin",
  BM: "Bermudes",
  BT: "Bhoutan",
  BO: "Bolivie",
  BQ: "Bonaire, Saint-Eustache et Saba",
  BA: "Bosnie-Herzégovine",
  BW: "Botswana",
  BV: "Bouvet",
  BR: "Brésil",
  IO: "Indien",
  BN: "Brunéi Darussalam",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  KY: "Caïmans",
  CF: "République centrafricaine",
  TD: "Tchad",
  CL: "Chili",
  CN: "Chine",
  CX: "Christmas",
  CC: "Cocos",
  CO: "Colombie",
  KM: "Comores",
  CD: "République démocratique du Congo",
  CG: "Congo",
  CK: "Cook",
  CR: "Costa Rica",
  HR: "Croatie",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Chypre",
  CZ: "Tchéquie",
  DK: "Danemark",
  DJ: "Djibouti",
  DM: "Dominique",
  DO: "République dominicaine",
  EC: "Équateur",
  EG: "Égypte",
  SV: "Salvador",
  GQ: "Guinée équatoriale",
  ER: "Érythrée",
  EE: "Estonie",
  SZ: "Eswatini",
  ET: "Éthiopie",
  FK: "Îles Falkland (Malvinas)",
  FO: "Féroé",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GF: "Guyane française",
  PF: "Polynésie française",
  TF: "Terres australes françaises",
  GA: "Gabon",
  GM: "Gambie",
  GE: "Géorgie",
  DE: "Allemagne",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Grèce",
  GL: "Groenland",
  GD: "Grenade",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guinée",
  GW: "Guinée-Bissau",
  GY: "Guyana",
  HT: "Haïti",
  HM: "Heard-et-Îles MacDonald",
  VA: "Saint-Siège",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hongrie",
  IS: "Islande",
  IN: "Inde",
  ID: "Indonésie",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Irlande",
  IM: "Île de Man",
  IL: "Israël",
  IT: "Italie",
  CI: "Côte d'Ivoire",
  JM: "Jamaïque",
  JP: "Japon",
  JE: "Jersey",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Corée du Nord",
  KR: "Corée du Sud",
  KW: "Koweït",
  KG: "Kirghizistan",
  LA: "Lao",
  LV: "Lettonie",
  LB: "Liban",
  LS: "Lesotho",
  LR: "Libéria",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaisie",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MH: "Marshall",
  MQ: "Martinique",
  MR: "Mauritanie",
  MU: "Maurice",
  YT: "Mayotte",
  MX: "Mexique",
  FM: "Micronésie",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Monténégro",
  MS: "Montserrat",
  MA: "Maroc",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibie",
  NR: "Nauru",
  NP: "Népal",
  NL: "Pays-Bas",
  NC: "Nouvelle-Calédonie",
  NZ: "Nouvelle-Zélande",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigéria",
  NU: "Niue",
  NF: "Norfolk",
  MK: "Macédoine du Nord",
  MP: "Mariannes du Nord",
  NO: "Norvège",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palaos",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guinée",
  PY: "Paraguay",
  PE: "Pérou",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Pologne",
  PT: "Portugal",
  PR: "Porto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Roumanie",
  RU: "Russie",
  RW: "Rwanda",
  BL: "Saint-Barthélemy",
  SH: "Sainte-Hélène, Ascension et Tristan da Cunha",
  KN: "Saint-Kitts-et-Nevis",
  LC: "Sainte-Lucie",
  MF: "Saint-Martin",
  PM: "Saint-Pierre-et-Miquelon",
  VC: "Saint-Vincent-et-les Grenadines",
  WS: "Samoa",
  SM: "Saint-Marin",
  ST: "Sao Tomé-et-Principe",
  SA: "Arabie saoudite",
  SN: "Sénégal",
  RS: "Serbie",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SX: "Saint-Martin",
  SK: "Slovaquie",
  SI: "Slovénie",
  SB: "Salomon",
  SO: "Somalie",
  ZA: "Afrique du Sud",
  GS: "Géorgie du Sud-et-les Îles Sandwich du Sud",
  SS: "Soudan du Sud",
  ES: "Espagne",
  LK: "Sri Lanka",
  SD: "Soudan",
  SR: "Suriname",
  SJ: "Svalbard et l'Île Jan Mayen",
  SE: "Suède",
  CH: "Suisse",
  SY: "Syrie",
  TW: "Taïwan",
  TJ: "Tadjikistan",
  TZ: "Tanzanie",
  TH: "Thaïlande",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinité-et-Tobago",
  TN: "Tunisie",
  TR: "Turquie",
  TM: "Turkménistan",
  TC: "Turks-et-Caïcos",
  TV: "Tuvalu",
  UG: "Ouganda",
  UA: "Ukraine",
  AE: "Émirats arabes unis",
  GB: "Royaume-Uni",
  UM: "Îles mineures éloignées des États-Unis",
  US: "États-Unis d'Amérique",
  UY: "Uruguay",
  UZ: "Ouzbékistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Vierges britanniques",
  VI: "Vierges des États-Unis",
  WF: "Wallis-et-Futuna",
  EH: "Sahara occidental",
  YE: "Yémen",
  ZM: "Zambie",
  ZW: "Zimbabwe",
  AN: "Antilles néerlandaises",
  GZ: "Bande de Gaza",
  XK: "Kosovo",
};

export function getCountryName(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
