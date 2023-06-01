import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notifivation';

const options = ['good', 'bad', 'neutral'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setBad(bad + 1);
        break;
      case 'bad':
        setNeutral(neutral + 1);
        break;
      default:
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good * 100) / (good + neutral + bad));
    return isNaN(percentage) ? 0 : percentage;
  };

  return (
    <div>
      <Section title="please leave feedback">
        <Feedback options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics:">
        {countTotalFeedback() === 0 ? (
          <Notification message="no feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage() + '%'}
          />
        )}
      </Section>
    </div>
  );
};
