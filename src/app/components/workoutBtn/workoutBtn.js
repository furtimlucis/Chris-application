import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectWorkOutType,
  functionalHyperTrophy,
  relativeStrength,
  hyperTrophy,
  strEndurance,
  noneReset 
} from '../../../features/workout/workoutSlice';
import { WorkoutType } from '../../../features/workout/types';
import styles from './workoutBtn.module.css'; 

export function WorkoutComponent() {
  const dispatch = useDispatch();
  const currentWorkoutType = useSelector(selectWorkOutType);
  let fnArray = [relativeStrength(), functionalHyperTrophy(), hyperTrophy(), strEndurance(), noneReset()];

  const generateHtmlList = () => {
    let buttonArray = [];
    Object.keys(WorkoutType).forEach((element, index)  => {
      if (WorkoutType[element] !== currentWorkoutType) {
        buttonArray.push(
          <button className={styles.buttons}
          key={WorkoutType[element]}
          aria-label={WorkoutType[element]} 
          onClick={() => { dispatch(fnArray[index]);} }>
            {WorkoutType[element]}
          </button>
          );
      } else {
        buttonArray.push(
          <button className={styles.buttonsSelect}
          key={WorkoutType[element]}
          aria-label={WorkoutType[element]} 
          onClick={() => { dispatch(fnArray[index]);} }>
            {WorkoutType[element]}
          </button>
          );
      }

    })
    return buttonArray;
  }

    return (
      <div>
        <div style={{width: 1000, height: 200}}>
          {generateHtmlList()}
        </div>
      </div>
    );
}