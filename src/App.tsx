import './App.css';
import {OpenApiProvider} from "./context/OpenApiContext";
import Header from "./components/Header/Header";
import ApiDocument from "./components/ApiDocument";
import React from 'react';

function App() {
  return (
    <div className="App">
        <OpenApiProvider yamlUrl={'museum-api.yaml'}>
            <Header />
            <ApiDocument/>
      </OpenApiProvider>
    </div>

  );
}

export default App;
