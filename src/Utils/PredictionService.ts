import { PredictionValidationSchemaType } from '@Model/PredictionSchema.ts';
import PredictionResult from '@Model/PredictionResult.ts';
import axios from 'axios';

export async function predict(body: PredictionValidationSchemaType): Promise<PredictionResult> {
  const res = await axios.post<PredictionResult>('http://localhost:5000/predict', body);
  return res.data;
}
