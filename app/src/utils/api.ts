import axios, { AxiosError } from 'axios';

export interface Call {
  id: number;
  record: string;
  partnership_id: string;
  date: string;
  time: number;
  from_number: string;
  source: string;
  in_out: number;
  status: string;
  person_avatar: string;
}

interface ApiResponse {
  results: Call[];
  error?: {
    description: string;
  };
}

const API_URL = 'https://api.skilla.ru/mango/getList';
const token = 'testtoken';

export const fetchCalls = async (
  dateStart: string,
  dateEnd: string,
  inOut: string,
  sortBy: string
): Promise<Call[]> => {
  try {
    const url = `${API_URL}?date_start=${dateStart}&date_end=${dateEnd}${inOut ? `&in_out=${inOut}` : ''}${sortBy ? `&sort_by=${sortBy}` : ''}`;

    const response = await axios.post<ApiResponse>(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.results;
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);
    const errorMessage = error.response?.data
      ? (error.response.data as ApiResponse).error?.description
      : 'Ошибка сети';
    throw new Error(errorMessage);
  }
};
