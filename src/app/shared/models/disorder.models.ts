export interface ISymptom {
  id: number;
  title: string;
}

export interface IDisorder {
  id: number;
  title: string;
  description: string;
  external_link: string;
  verified: boolean;
  update: Date;
  symptoms: ISymptom[];
}
