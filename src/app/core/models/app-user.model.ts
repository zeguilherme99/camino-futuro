export interface AppUser {
  uid: string;
  email: string | null;
  role: 'company' | 'refugee';
}
