import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
      <App />
      <GlobalStyle />
  </>,
);
