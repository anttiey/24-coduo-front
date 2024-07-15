const API_URL = '';

export interface UserInfo {
  id: number;
  nameA: string;
  nameB: string;
}

export const getUserName = async (): Promise<UserInfo> => {
  const response = await fetch(`${API_URL}/pair-room`, {
    method: 'GET',
  });

  const data: UserInfo = await response.json();

  return data;
};
