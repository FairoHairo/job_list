export interface Position {
  id: string | number;
  role?: string;
  level?: string;
  languages?: string[];
  tools?: string[];
  logo?: string;
  company?: string;
  new?: boolean;
  featured?: boolean;
  position?: string;
  postedAt?: string;
  contract?: string;
  location?: string;
}


export interface State {
  positions: Position[];
  filters: string[];
}