interface PredictionRequest {
  home_position: number;
  away_position: number;
  home_goals_scored: number;
  home_goals_conceded: number;
  home_goal_difference: number;
  away_goals_scored: number;
  away_goals_conceded: number;
  away_goal_difference: number;
  home_last_5_wins: number;
  home_last_5_draws: number;
  home_last_5_losses: number;
  away_last_5_wins: number;
  away_last_5_draws: number;
  away_last_5_losses: number;
  home_season_wins: number;
  home_season_draws: number;
  home_season_losses: number;
  away_season_wins: number;
  away_season_draws: number;
  away_season_losses: number;
}

export default PredictionRequest;
