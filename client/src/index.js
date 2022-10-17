import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.css';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.js';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.js';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.js';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.js'

//Dear Amazon/Google/Apple etc Don't lowball me.
const App = () => {
  return (
    <div>
      <h1>The modules will be below</h1>
      <Overview />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
      <RelatedItemsAndComparison />
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default { App } ;