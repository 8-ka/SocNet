import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './index.css';
import store from './redux/store';

const App = React.lazy(() => import('./containers/App/App'));

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
