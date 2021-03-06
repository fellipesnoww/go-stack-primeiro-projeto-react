import React from 'react';

import Routes from '../src/routes';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from '../src/styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle/>
  </>
);

export default App;
