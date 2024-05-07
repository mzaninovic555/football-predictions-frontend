import * as Yup from 'yup';
import { InferType } from 'yup';

const PredictionValidationSchema = Yup.object().shape({
  home_position: Yup.number().required(),
  away_position: Yup.number().required(),
  home_goals_scored: Yup.number().required(),
  home_goals_conceded: Yup.number().required(),
  home_goal_difference: Yup.number().required(),
  away_goals_scored: Yup.number().required(),
  away_goals_conceded: Yup.number().required(),
  away_goal_difference: Yup.number().required(),
  home_last_5_wins: Yup.number().required(),
  home_last_5_draws: Yup.number().required(),
  home_last_5_losses: Yup.number().required(),
  away_last_5_wins: Yup.number().required(),
  away_last_5_draws: Yup.number().required(),
  away_last_5_losses: Yup.number().required(),
  home_season_wins: Yup.number().required(),
  home_season_draws: Yup.number().required(),
  home_season_losses: Yup.number().required(),
  away_season_wins: Yup.number().required(),
  away_season_draws: Yup.number().required(),
  away_season_losses: Yup.number().required(),
});

type PredictionValidationSchemaType = InferType<typeof PredictionValidationSchema>;

export { PredictionValidationSchema };
export type { PredictionValidationSchemaType };
