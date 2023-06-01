import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notifivation';
import React, { Component } from 'react';

const options = ['good', 'bad', 'neutral'];
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  sum = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  handleIncrement = type => {
    switch (type) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
      default:
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return isNaN(percentage) ? 0 : percentage;
  };

  render() {
    return (
      <div>
        <Section title="please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.handleIncrement} />
        </Section>

        <Section title="Statistics:">
          {this.countTotalFeedback() === 0 ? (
            <Notification total={this.state} message="no feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() + '%'}
            />
          )}
        </Section>
      </div>
    );
  }
}
