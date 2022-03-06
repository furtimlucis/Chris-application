import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import workoutReducer from '../features/workout/workoutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    workout: workoutReducer,
  },
});
