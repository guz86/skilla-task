import axios from 'axios';

const BASE_URL = 'https://api.skilla.ru/mango/getRecord';
const token = 'testtoken';

interface GetCallRecordParams {
  recordId: number;
  partnershipId: string;
}

export const getCallRecord = async ({
  recordId,
  partnershipId,
}: GetCallRecordParams): Promise<string> => {
  const requestBody = {
    record: recordId,
    partnership_id: partnershipId,
  };

  try {
    const response = await axios.post(BASE_URL, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      responseType: 'blob',
    });

    const audioUrl = URL.createObjectURL(response.data);
    return audioUrl;
  } catch (error) {
    console.error('Ошибка при получении записи звонка:', error);
    throw error;
  }
};
