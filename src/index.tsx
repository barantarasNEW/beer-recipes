import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './common/i18n';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
