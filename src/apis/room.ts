const API_URL = 'http://localhost:8080';

export const addPairRoom = async (nameA: string, nameB: string) => {
  const response = await fetch(`${API_URL}/pair-room`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nameA, nameB }),
  });

  if (!response.ok) {
    throw new Error('페어룸 생성에 실패했습니다.');
  }

  const data = await response.json();

  return data;
};
