import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://api.skilla.ru/mango/getRecord';
const token = 'testtoken';

interface GetCallRecordParams {
  record: string;
  partnership_id: string;
}

interface ApiError {
  description: string;
}

export const getCallRecord = async ({
  record,
  partnership_id,
}: GetCallRecordParams): Promise<string> => {
  try {
    const url = `${BASE_URL}?record=${encodeURIComponent(record)}&partnership_id=${encodeURIComponent(partnership_id)}`;

    const response = await axios.post<Blob>(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',
      }
    );

    const audioUrl = URL.createObjectURL(response.data);
    return audioUrl;
  } catch (err) {
    const error = err as AxiosError<ApiError>;
    console.error('Ошибка при получении записи звонка:', error);
    const errorMessage = error.response?.data
      ? error.response.data.description
      : 'Ошибка сети';
    throw new Error(errorMessage);
  }
};
