// import * as SurveyType from './types/survey';
// import { ESurveyTypes } from './types/survey';
// import {
//   Editor,
//   Viewer,
//   DefaultModeEditor,
//   DefaultModeResult,
//   DefaultModeViewer,
// } from './components';

// export type { SurveyType };

// export { Editor, Viewer, DefaultModeEditor, DefaultModeResult, DefaultModeViewer, ESurveyTypes };
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.demo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
