import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { WorkoutComponent } from './app/components/workoutBtn/workoutBtn';
import { RepSchemesComponent } from './app/components/reps/repSchemes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WorkoutComponent />
        <RepSchemesComponent />
      </header>
    </div>
  );
}

export default App;
