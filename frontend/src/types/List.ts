import { User } from "./User";

export interface List {
  id: number;
  name: string;
  icon: string;
  films: string[]; // Modify with omdb film ids when ready
  user: User;
}
