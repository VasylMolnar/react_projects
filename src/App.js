import { useState, React } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions feedbacks={feedback} setFeedback={setFeedback} />
        <Statistics feedbacks={feedback} />
      </Section>
    </div>
  );
}

export default App;
