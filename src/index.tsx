import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

