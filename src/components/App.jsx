import { useState } from 'react';
import { FeedbackMenu } from './FeedbackMenu/FeedbackMenu';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notificstion } from './Notification/Notification';

export const App = () => {
  const [feedbackData, usefeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = feedback => {
    usefeedbackData(state => ({ ...state, [feedback]: state[feedback] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackData;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedbackData;
    return Math.round((100 / (good + neutral + bad)) * good);
  };

  const { good, neutral, bad } = feedbackData;
  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackMenu
          options={['good', 'neutral', 'bad']}
          onAddFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notificstion message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
