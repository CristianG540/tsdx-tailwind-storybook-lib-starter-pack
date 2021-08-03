import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing } from 'inmo-tsdx-demo-lib-1';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
