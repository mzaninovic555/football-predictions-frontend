import { useForm, UseFormReturn } from 'react-hook-form';
import {
  PredictionValidationSchema,
  PredictionValidationSchemaType,
} from '@Model/PredictionSchema.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card } from 'primereact/card';
import FormInputText from '@Components/FormInputText.tsx';
import { Button } from 'primereact/button';
import { useRef, useState } from 'react';
import PredictionResult from '@Model/PredictionResult.ts';
import { predict } from '@Utils/PredictionService.ts';
import { Divider } from 'primereact/divider';
import PredictionRequest from '@Model/PredictionRequest.ts';
import { Export, Trash } from '@phosphor-icons/react';

const Prediction = () => {
  const form = useForm<PredictionValidationSchemaType>({
    resolver: yupResolver(PredictionValidationSchema),
  });

  const [predictionResult, setPredictionResult] = useState<PredictionResult>();
  const resultRef = useRef<HTMLDivElement>(null);

  const handlePredictSubmit = async (data: PredictionValidationSchemaType) => {
    const body: PredictionRequest = {
      home_position: Number(data.home_position),
      away_position: Number(data.away_position),
      home_goals_scored: Number(data.home_goals_scored),
      home_goals_conceded: Number(data.home_goals_conceded),
      home_goal_difference: Number(data.home_goal_difference),
      away_goals_scored: Number(data.away_goals_scored),
      away_goals_conceded: Number(data.away_goals_conceded),
      away_goal_difference: Number(data.away_goal_difference),
      home_last_5_wins: Number(data.home_last_5_wins),
      home_last_5_draws: Number(data.home_last_5_draws),
      home_last_5_losses: Number(data.home_last_5_losses),
      away_last_5_wins: Number(data.away_last_5_wins),
      away_last_5_draws: Number(data.away_last_5_draws),
      away_last_5_losses: Number(data.away_last_5_losses),
      home_season_wins: Number(data.home_season_wins),
      home_season_draws: Number(data.home_season_draws),
      home_season_losses: Number(data.home_season_losses),
      away_season_wins: Number(data.away_season_wins),
      away_season_draws: Number(data.away_season_draws),
      away_season_losses: Number(data.away_season_losses),
    };
    const res = await predict(body);
    if (!res) {
      return;
    }
    setPredictionResult(res);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 0);
  };

  return (
    <>
      <main>
        <div className="w-full text-center">
          <h1>Football winner predictor</h1>
        </div>
        <form className="container" onSubmit={form.handleSubmit(handlePredictSubmit)}>
          <div className="sm:col-12 md:col-6">
            <Card
              title="Home team"
              subTitle="Data about the home team"
              className="m-2 flex flex-column shadow-5">
              <FormInputText
                className="sm:col-12 md:col-4"
                type="number"
                label="Position"
                name="home_position"
                form={form as unknown as UseFormReturn}
              />
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Last 5 matches (all competitions)</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Wins"
                    name="home_last_5_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Draws"
                    name="home_last_5_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Losses"
                    name="home_last_5_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season goals in competition</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Scored"
                    name="home_goals_scored"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Conceded"
                    name="home_goals_conceded"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goal Difference"
                    name="home_goal_difference"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season wins/draws/losses in competition</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Wins"
                    name="home_season_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Draws"
                    name="home_season_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Losses"
                    name="home_season_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="sm:col-12 md:col-6">
            <Card
              title="Away team"
              subTitle="Data about the away team"
              className="m-2 flex flex-column shadow-5">
              <FormInputText
                className="sm:col-12 md:col-4"
                type="number"
                label="Position"
                name="away_position"
                form={form as unknown as UseFormReturn}
              />
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Last 5 matches (all competitions)</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Wins"
                    name="away_last_5_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Draws"
                    name="away_last_5_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Losses"
                    name="away_last_5_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season goals in competition</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Scored"
                    name="away_goals_scored"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Conceded"
                    name="away_goals_conceded"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goal Difference"
                    name="away_goal_difference"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season wins/draws/losses in competition</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Wins"
                    name="away_season_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Draws"
                    name="away_season_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Losses"
                    name="away_season_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 flex justify-content-center gap-2">
            <Button
              icon={<Export />}
              raised
              severity="success"
              className="w-1 justify-content-evenly"
              type="submit">
              Submit
            </Button>
            <Button
              icon={<Trash />}
              raised
              severity="danger"
              className="w-1 justify-content-evenly"
              type="button"
              onClick={() => {
                setPredictionResult(undefined);
                form.reset();
              }}>
              Clear
            </Button>
          </div>
          {predictionResult && (
            <Card id="result" title="Prediction result" className="w-full mt-6 shadow-5">
              <div ref={resultRef} className="flex justify-content-evenly text-center">
                <div>
                  <h1>Home win</h1>
                  <h2>{Math.round(predictionResult.homeWin * 10) / 10}%</h2>
                </div>
                <Divider layout="vertical" />
                <div>
                  <h1>Draw</h1>
                  <h2>{Math.round(predictionResult.draw * 10) / 10}%</h2>
                </div>
                <Divider layout="vertical" />
                <div>
                  <h1>Away win</h1>
                  <h2>{Math.round(predictionResult.awayWin * 10) / 10}%</h2>
                </div>
              </div>
            </Card>
          )}
        </form>
      </main>
    </>
  );
};

export default Prediction;
