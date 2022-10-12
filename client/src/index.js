import React from 'react';
import ReactDOM from 'react-dom';
import './assests/styles.css';
import { createRoot } from 'react-dom/client';
//Dear Amazon/Google/Apple etc Don't lowball me.
const App = () => {
  return (
    <div>
      <h1>AHHHHHHH</h1>
    </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);