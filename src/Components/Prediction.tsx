import { useForm, UseFormReturn } from 'react-hook-form';
import {
  PredictionValidationSchema,
  PredictionValidationSchemaType,
} from '@Model/PredictionSchema.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card } from 'primereact/card';
import FormInputText from '@Components/FormInputText.tsx';
import { Button } from 'primereact/button';
import { useState } from 'react';
import PredictionResult from '@Model/PredictionResult.ts';
import { predict } from '@Utils/PredictionService.ts';
import { Divider } from 'primereact/divider';

const Prediction = () => {
  const form = useForm<PredictionValidationSchemaType>({
    resolver: yupResolver(PredictionValidationSchema),
  });

  const [predictionResult, setPredictionResult] = useState<PredictionResult>();

  const handlePredictSubmit = async (data: PredictionValidationSchemaType) => {
    const res = await predict(data);
    if (!res) {
      return;
    }
    setPredictionResult(res);
  };

  return (
    <>
      <main>
        <form className="container" onSubmit={form.handleSubmit(handlePredictSubmit)}>
          <div className="col-12 flex justify-content-center">
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={() => setPredictionResult(undefined)}>
              Clear
            </Button>
          </div>
          <div className="sm:col-12 md:col-6">
            <Card title="Home team" className="m-2 flex flex-column">
              <FormInputText
                className="col-12"
                type="number"
                label="Position"
                name="home_position"
                form={form as unknown as UseFormReturn}
              />
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Form</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 wins"
                    name="home_last_5_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 draws"
                    name="home_last_5_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 losses"
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
                    label="Goals scored"
                    name="home_goals_scored"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goals conceded"
                    name="home_goals_conceded"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goal difference"
                    name="home_goal_difference"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season wins/draws/losses</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season wins"
                    name="home_season_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season draws"
                    name="home_season_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season losses"
                    name="home_season_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="sm:col-12 md:col-6">
            <Card title="Away team" className="m-2 flex flex-column">
              <FormInputText
                className="col-12"
                type="number"
                label="Position"
                name="away_position"
                form={form as unknown as UseFormReturn}
              />
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Form</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 wins"
                    name="away_last_5_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 draws"
                    name="away_last_5_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Last 5 losses"
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
                    label="Goals scored"
                    name="away_goals_scored"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goals conceded"
                    name="away_goals_conceded"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Goal difference"
                    name="away_goal_difference"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
              <Divider />
              <div className="flex flex-column">
                <h3 className="m-0 mt-2 p-2">Season wins/draws/losses</h3>
                <div className="flex flex-row flex-wrap">
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season wins"
                    name="away_season_wins"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season draws"
                    name="away_season_draws"
                    form={form as unknown as UseFormReturn}
                  />
                  <FormInputText
                    className="sm:col-12 md:col-4"
                    type="number"
                    label="Season losses"
                    name="away_season_losses"
                    form={form as unknown as UseFormReturn}
                  />
                </div>
              </div>
            </Card>
          </div>
        </form>
        <>
          <div>{predictionResult?.homeWin ?? '-'}%</div>
          <div>{predictionResult?.draw ?? '-'}%</div>
          <div>{predictionResult?.awayWin ?? '-'}%</div>
        </>
      </main>
    </>
  );
};

export default Prediction;
