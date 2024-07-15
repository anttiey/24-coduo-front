export const getUserName = async (roomId: string) => {
  try {
    const response = await fetch(`room/${roomId}/onboarding`, {
      method: 'GET',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error();
    }
  }
};
