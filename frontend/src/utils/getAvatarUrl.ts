import { User } from "../types/User";

const SUPABASE_URL = 'https://mapslaxsucsvlepojair.supabase.co';

export const getAvatarUrl = (user: User) =>
  user.profilePictureName
    ? `${SUPABASE_URL}/storage/v1/object/public/profile-pictures/${user.profilePictureName}`
    : '/default-avatar.png';