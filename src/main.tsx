import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import { I18nextProvider, useTranslation } from 'react-i18next';

const Main = () => {
  const { i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <StyleProvider hashPriority="high">
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </StyleProvider>
        </ApolloProvider>
      </ReduxProvider>
    </I18nextProvider>
  );
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
