export type CharacterKey = 'A' | 'B' | 'C';

export interface CharacterProfile {
  key: CharacterKey;
  id: string;
  nameAr: string;
  nameEn: string;
  nameZh: string;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  abilityAr: string;
  abilityEn: string;
  descAr: string;
  descEn: string;
  quoteAr: string;
  quoteEn: string;
  traitsAr: string[];
  traitsEn: string[];
  strengthsAr: string[];
  strengthsEn: string[];
  weaknessesAr: string[];
  weaknessesEn: string[];
  synergyAr: string;
  synergyEn: string;
  image: string;
  themeColor: string;
  accentColor: string;
  badgeBg: string;
}

export interface QuizOption {
  textAr: string;
  textEn: string;
  type: CharacterKey;
}

export interface QuizQuestion {
  id: number;
  questionAr: string;
  questionEn: string;
  options: QuizOption[];
  categoryAr?: string;
  categoryEn?: string;
}

export interface QuizResultScores {
  A: number;
  B: number;
  C: number;
}
