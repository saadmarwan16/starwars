export interface ICharacter {
  id: string;
  name: string;
  image: string;
  gender: string;
  height?: number;
  species?: string;
  homeworld?: string;
  eyeColor?: string;
  skinColor?: string;
  affiliations: string[];
  wiki: string;
}
