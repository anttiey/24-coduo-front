const API_URL = process.env.API_URL;

export interface UserInfo {
  id: number;
  nameA: string;
  nameB: string;
}

export const getUserName = async (accessCode: string): Promise<UserInfo> => {
  const response = await fetch(`${API_URL}/pair-room?accessCode=${accessCode}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error("유효하지 않은 방 참가 코드입니다.")
  }

  const data: UserInfo = await response.json();

  return data;
};
