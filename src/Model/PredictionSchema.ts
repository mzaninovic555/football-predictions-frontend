import * as Yup from 'yup';
import { InferType } from 'yup';

const PredictionValidationSchema = Yup.object().shape({
  home_position: Yup.string().required(),
  away_position: Yup.string().required(),
  home_goals_scored: Yup.string().required(),
  home_goals_conceded: Yup.string().required(),
  home_goal_difference: Yup.string().required(),
  away_goals_scored: Yup.string().required(),
  away_goals_conceded: Yup.string().required(),
  away_goal_difference: Yup.string().required(),
  home_last_5_wins: Yup.string().required(),
  home_last_5_draws: Yup.string().required(),
  home_last_5_losses: Yup.string().required(),
  away_last_5_wins: Yup.string().required(),
  away_last_5_draws: Yup.string().required(),
  away_last_5_losses: Yup.string().required(),
  home_season_wins: Yup.string().required(),
  home_season_draws: Yup.string().required(),
  home_season_losses: Yup.string().required(),
  away_season_wins: Yup.string().required(),
  away_season_draws: Yup.string().required(),
  away_season_losses: Yup.string().required(),
});

type PredictionValidationSchemaType = InferType<typeof PredictionValidationSchema>;

export { PredictionValidationSchema };
export type { PredictionValidationSchemaType };
