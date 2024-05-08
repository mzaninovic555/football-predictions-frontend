import PredictionResult from '@Model/PredictionResult.ts';
import axios from 'axios';
import PredictionRequest from '@Model/PredictionRequest.ts';

export async function predict(body: PredictionRequest): Promise<PredictionResult> {
  const res = await axios.post<PredictionResult>('http://localhost:5000/predict', body);
  return res.data;
}
