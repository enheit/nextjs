import useSWR from 'swr'
import { Error, User } from '../pages/api/users/[id]'

export async function fetcher(url: string) {
  const response = await fetch(url, {
    headers: {
      // 'Authentication': 'Bearer 123'
    }
  });
  const result = response.json();

  return result;
}

export function useUser(userId: string) {
  const { data, error, isLoading } = useSWR<User, Error>(`/api/users/${userId}`, fetcher)

  return {
    data,
    error,
    isLoading
  }
}