export type Achievements = "String" | "String";

export interface User {
  username: string;
  avatar: string;
  ranking: number;
  points: number;
  achievements: Array<Achievements>;
  isLoggedIn: boolean;
}
