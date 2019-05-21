import React from 'react';
import publications from './FirstPart/publications.json';
import Reader from './FirstPart/Reader/Reader';

const App = () => (
  <div>
    <Reader items={publications} />
  </div>
);

export default App;
