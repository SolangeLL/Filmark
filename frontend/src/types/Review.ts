export interface Review {
  id: string;
  title: string;
  comment: string;
  goodNote: number;
  badNote: number;
  reviewDate: string;
  profilePictureUrl?: string;
}
