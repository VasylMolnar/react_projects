import { React, lazy, Suspense, useContext } from 'react';
import { DataProvider } from './context/DataContext';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <DataProvider>
      <div id="App">
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
