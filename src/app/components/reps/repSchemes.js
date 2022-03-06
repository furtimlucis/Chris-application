import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectWorkOutType,
  updateRepRange,
  selectCurrentRepRange
} from '../../../features/workout/workoutSlice';
import { checkIndex } from '../../../features/workout/types';
import styles from './repSchemes.module.css'; 
import { current } from '@reduxjs/toolkit';

export function RepSchemesComponent() {
  const dispatch = useDispatch();
  let currentWorkoutType = useSelector(selectWorkOutType);
  let currentRepRange = useSelector(selectCurrentRepRange);
  let [repRange, setRepRange] = useState(0);
  let [currRepRange, setCurrRepRange] = useState('');
  let index = checkIndex(currentWorkoutType);
  let enumContainer = [[1,2,3,4,5], [6,7,8], [9,10,11,12], [13,14,15,16,17,18,19,20], [0]];
  const inputRef = useRef(null);
  const inputRefReps = useRef(null);

  const generateDropDownList = useMemo(() => {
    let buttonArray = [];
    setRepRange(enumContainer[index][0])
    enumContainer[index].forEach((element, index2)  => {
      buttonArray.push(
        <option key={index2} value={index2}>{element}</option>
      )
    })
    return buttonArray;
  }, [index]);

  const generateRepDropDownList = useMemo(() => {
    let buttonArray = [];
    currentRepRange.forEach((element, index2)  => {
      buttonArray.push(
        <option key={index2} value={element}>{element}</option>
      )
    })
    setCurrRepRange(currentRepRange[0]);
    return buttonArray;
  }, [currentRepRange]);

  const handleChange = (e) => {
    setRepRange(e.target.value);
    dispatch(updateRepRange(e.target.value));
  };

  const handleRepChange = (e) => {
    setCurrRepRange(e.target.value);
    //dispatch(updateRepRange(e.target.value));
  };

  useEffect(() => {
    inputRef.current.addEventListener("input", handleChange);
    inputRefReps.current.addEventListener("input", handleRepChange);
  }, []);
  
    return (
      <div style={{width: 1000}}>
        <div style={{width: 500, height: 250, float: 'left'}}>
        <span style={{fontSize:25}}>RM Continuum: </span>
          <select 
              value={repRange}
              ref={inputRef}
            >
              {generateDropDownList}
          </select>
        </div>
        <div style={{width: 500, height: 250, float: 'right'}}>
          <span style={{fontSize:25}}>Rep Schemes: </span>
          <select 
              value={currRepRange}
              ref={inputRefReps}
            >
              {generateRepDropDownList}
          </select>
        </div>
      </div>
    );
}