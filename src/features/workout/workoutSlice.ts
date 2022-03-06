import { createSlice } from '@reduxjs/toolkit';
import { WorkoutType, IWorkoutState } from './types'
import { fnHyperRepRange, hyperRepRange, relativeRepRange, strEndureRepRange } from '../reps/types';

export const initialState: IWorkoutState = {
    currentWorkoutType : WorkoutType.none,
    currentRepRange: ['']
}

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    functionalHyperTrophy: (state, test) => {
      state.currentWorkoutType = WorkoutType.functionalHyperTrophy;
    },
    relativeStrength: (state) => {
      state.currentWorkoutType = WorkoutType.relativeStrength;
    },
    hyperTrophy: (state) => {
      state.currentWorkoutType = WorkoutType.hyperTrophy;
    },
    strEndurance: (state) => {
      state.currentWorkoutType = WorkoutType.strEndurance;
    },
    noneReset: (state) => {
      state.currentWorkoutType = WorkoutType.none;
    },
    updateRepRange: (state, value) => {
      let resultArr = [];
      let arrayToIterate;

      if (state.currentWorkoutType === WorkoutType.relativeStrength) {
        arrayToIterate = relativeRepRange;
      } else if (state.currentWorkoutType === WorkoutType.functionalHyperTrophy) {
        arrayToIterate = fnHyperRepRange;
      } else if (state.currentWorkoutType === WorkoutType.strEndurance) {
        arrayToIterate = strEndureRepRange;
      } else if (state.currentWorkoutType === WorkoutType.hyperTrophy) {
        arrayToIterate = hyperRepRange;
      }
      
      
      
      let offset = parseInt(value.payload);
      for (var i = 0 + offset; i < arrayToIterate.length; i++) {
        for(var j = 0; j < arrayToIterate[i].length; j++) {
          resultArr.unshift(arrayToIterate[i][j]);
        }
      }
      state.currentRepRange = resultArr;
      console.log(resultArr);
    }
  },
});

export const { functionalHyperTrophy, relativeStrength, hyperTrophy, strEndurance, noneReset, updateRepRange  } = workoutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWorkOutType = (state) => state.workout.currentWorkoutType;

export const selectCurrentRepRange = (state) => state.workout.currentRepRange;

export default workoutSlice.reducer;
