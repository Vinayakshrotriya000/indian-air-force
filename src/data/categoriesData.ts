import { AircraftCategory } from '../types/aircraft';

export interface CategoryInfo {
  id: string;
  name: AircraftCategory;
  shortTitle: string;
  count: number;
  description: string;
  heroImage: string;
  imageAlt: string;
  iconName: string;
  accentColor: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'fighters',
    name: 'Fighter Jets and Combat Aircraft',
    shortTitle: 'Fighter Jets',
    count: 6,
    description: 'Supersonic air superiority, deep penetration interdiction, and multirole combat aircraft defending Indian sovereign airspace.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1W3TgMRU1DXvIWBCj0qQxFTSJxCb6RwHlJl8zwZQcYqZZRGewiTqk_FnPj9QxF6AmwAlZV6PhNOgdk9Ddami7Aa3Zs69Z8yALt7nrAjsi6wTR_bPiS4eVV3zqGhdfJKmlLlVnWa-aUha749yChl-UyH_TpCD-t495VDuQ-MII5pMtYifF8SM7Hht2etx5Q8DG266UcUWzDgNKIdYhhOtrHIGJCfmqj-QlnO0rf0F2RvzpyPbIKk4CxlJg0',
    imageAlt: 'IAF Dassault Rafale frontline multirole fighter jet',
    iconName: 'Shield',
    accentColor: '#102A43',
  },
  {
    id: 'transport',
    name: 'Transport Aircraft',
    shortTitle: 'Transport',
    count: 7,
    description: 'Strategic heavy airlifters, tactical transport aircraft, and rugged mountain workhorses ensuring inter-theater mobility and high-altitude logistics.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1WjoPPtcNVj5HRZWNL4qArTVyhz0qKXjTpmH9obseofay9mdSa4CUSdea1mC3PgR4VXV2gminO9YMOB8ONopbShxAqnbyET0Ubszd3Q0YNDGiIulin0-rRAPEIBc57tlpevixNd1_gAYh_aEgUkWDuzNVjWrY8L6a3e1t6aKeAlumsHmfjbwgSahMmMfCu9MRGYwieg4p6Jnh63-7RVd_R6bKeefgvS50Iz7rMcMt-uHsgnL9abu86Chnk',
    imageAlt: 'IAF Boeing C-17 Globemaster III heavy transport on runway',
    iconName: 'Package',
    accentColor: '#007791',
  },
  {
    id: 'helicopters',
    name: 'Helicopters',
    shortTitle: 'Helicopters',
    count: 7,
    description: 'Rotary-wing assets encompassing heavy tandem lifters, high-altitude dedicated gunships, and tactical utility rotorcraft operating up to Siachen ridgelines.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1VNJOQsxDVI1rsZOViSQyiXtDZ_hND1C0-IDLsA1djEMovhO7E4nEpWa2QME_QLsBv9avE0T-rXyHgRWjKBf0RfN8F5LRl4s1m_19ydeAMPxiKJDmC2PjB85y6nrgWqpnAEz6Weg2wwiemvMHxFlkpzX1t60H5m4kOQ6ylP3c3wZzdH_81nCYq19AzVJljKjCfZqdL8LqhcAG4DAaTkhoimNmGL_dtGlC8iLQYJX1o5v82bLk7guvm_y-I',
    imageAlt: 'IAF AH-64E Apache attack helicopter with weapons loadout',
    iconName: 'Compass',
    accentColor: '#138808',
  },
  {
    id: 'trainers',
    name: 'Training Aircraft',
    shortTitle: 'Trainers',
    count: 7,
    description: 'A structured 3-stage training pipeline from ab-initio turboprop screening to advanced jet combat conversion preparing the next generation of fighter pilots.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1VPizw-0atJ6DaBwumSE96CyyrPdrzE7UxEptVtFTWdaVbVnTjCz1ylJSbEY47TFPa5oMcXreSfU_4KchLIh1J8BhdgLETQ1h23wlaordUeXSmxMyUQ8lhNzdtmdY8TrdPs2uXpPc2RmwmGNehQsEU0mzHoy2PVdm1I6PEwpnmj8PNT_56wQMVz2s3HuwqSHcoOi7Qm_thdik0sEKVSm3SKtebUivIWC-Wy5b-Ynfqgztfd-b45oZG0z3Q',
    imageAlt: 'IAF BAE Hawk 132 advanced jet trainer in flight',
    iconName: 'GraduationCap',
    accentColor: '#FF9933',
  },
  {
    id: 'surveillance',
    name: 'Surveillance and Special-Mission Aircraft',
    shortTitle: 'Special Missions & AWACS',
    count: 2,
    description: 'Airborne Early Warning and Control (AEW&C) platforms providing real-time 360-degree radar lookdown, electronic intelligence, and automated battle direction.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1Xc5pqZgcNuaOhBJNRDGol1tYaSCTZL35LNFQM97e_jY5mOxXlF65IDJq7osDWFM63z_qNImFvP6WjZAb49rsPV3eD-BBYgh22ukU8XwZbLoUFiJxZbqegWw0Hnx6j1VPNKtbD_QAJYw0CZJim-44_E-rVTZLW0-PvoBrVAeKQ1jAXlwNsi_tKG4YA3yBhv6jVWacBNW2nO9J_u7oWmQaR-tstHWdARwS0ahVfFqT436LNM12Hx9ipEWEg',
    imageAlt: 'IAF DRDO Netra AEW&C radar surveillance aircraft in flight',
    iconName: 'Radar',
    accentColor: '#3182CE',
  },
  {
    id: 'refuelling',
    name: 'Aerial Refuelling Aircraft',
    shortTitle: 'Aerial Refuelling Tankers',
    count: 1,
    description: 'Strategic force-multiplier tankers capable of simultaneous three-point mid-air refuelling to dramatically expand combat radius across the Indian Ocean.',
    heroImage: 'https://lh3.googleusercontent.com/aida/AEtjO1UYeQmnJc4GY6B_RsHLwQSn4-ckwMryjOxtOXxYzf6RSIU5IF4Suyo8IfuJKwlwoH0QM736Hw2OqKp3zkDVlanKitDKxDHHXvdXiDPppxf8RWMFWzPTuYhKkOpr4IvMNKk-bXlkHAuvKMewlEMHTbWeq01pJRhbRy6PTssAiJ5g404Di1Gh70wf0PrNLqLlvjAHJd_0HosQccrUxRKaoko5VoCWa08483_Goxdyve4xqgiUIFeHChmcFwc',
    imageAlt: 'IAF Ilyushin Il-78MKI aerial tanker refuelling two fighters simultaneously',
    iconName: 'Fuel',
    accentColor: '#D69E2E',
  },
];
