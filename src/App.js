import React from 'react';
import Card from './composition/Card';

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
