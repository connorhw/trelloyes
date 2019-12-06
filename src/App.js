import React from 'react';
import Card from './composition/Card';
//import List from './composition/List';

const firstCardTitle = (
  <Card>
    test
  </Card>
)

function App() {
  return (
    <main className='App'>
      
        {firstCardTitle}
      
    </main>
  );
}

export default App;
