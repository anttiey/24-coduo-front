const API_URL = process.env.REACT_APP_API_URL;

export interface UserInfo {
  id: number;
  nameA: string;
  nameB: string;
}

export const getUserName = async (accessCode: string): Promise<UserInfo> => {
  const response = await fetch(`${API_URL}/pair-room/?accessCode=${accessCode}`, {
    method: 'GET',
  });

  const data: UserInfo = await response.json();

  return data;
};
