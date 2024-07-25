import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import React, { useState } from 'react';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// // display the total number of collected reviews from all categories
// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// // display the percentage of positive reviews
// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();

//   // if total is greater than 0, return the positive percentage, else 0
//   return total > 0 ? Math.round((good / total) * 100) : 0;
// };

// update the state when a button is clicked
// handleClick = type => {
//   this.setState(prevState => ({
//     ...prevState,
//     [type]: prevState[type] + 1,
//   }));
// };

// render() {
// const { good, neutral, bad } = this.state;
// const total = this.countTotalFeedback();
// const positivePercentage = this.countPositiveFeedbackPercentage();
// const options = ['good', 'neutral', 'bad'];

// return (
//   <div>
//     <Section title="Please leave a feedback">
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.handleClick}
//       />
//     </Section>
//     <Section title="Statistics">
//       {total > 0 ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </Section>
//   </div>
// );
// }
// }

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // display the total number of collected reviews from all categories
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // display the percentage of positive reviews
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    // if total is greater than 0, return the positive percentage, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // update the state when a button is clicked
  const handleClick = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
