import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cmp } from 'semver';
import CompletionRing from './components/CompletionRing/CompletionRing';
import{ useState } from 'react';


const App = () => {
  const progress = 80; // Replace with your carbon usage value
  const carbonGoal = 25;
  const [showModal, setShowModal] = useState(false);

  const handleInfoClick = () => {
    setShowModal(true);
  };

  return (
    <div style={{ background: '#000', height: '100vh' }}>
      <CompletionRing progress={progress} carbonGoal={carbonGoal} onInfoClick={handleInfoClick} tooltipContent="Carbon emissions (kg) = (Power consumption in kW) x (Emission factor in kg CO2/kWh) x (Time in hours)"/>
    </div>
  );
};

export default App;
