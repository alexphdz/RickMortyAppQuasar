import axios, { AxiosError } from 'axios';
import notifierSnackBar from './notifierSnackBar';
import { ApiError } from '../exceptions/apiError';

export default function exceptionHandler(error: any) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const apiError = axiosError.response?.data as ApiError;
    console.log(apiError);
    if (apiError) {
      notifierSnackBar(apiError.detail, 'negative');
    } else {
      const unknownError = 'Error desconocido: ' + axiosError.message;
      notifierSnackBar(unknownError, 'negative');
    }
  } else {
    const unknownError = 'Error desconocido: ' + error.message;
    notifierSnackBar(unknownError, 'negative');
  }
}
