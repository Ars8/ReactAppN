import React from 'react';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { fetchNails } from './redux/actions/nails';

function App() {
  React.useEffect(() => {
    console.log(fetchNails);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
