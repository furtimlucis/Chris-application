export const UPDATE_WORKOUT_TYPE = 'UpdateWorkoutType';
export const INIT_WORKOUT_TYPE = 'InitWorkoutType';

export enum WorkoutType {
    relativeStrength = 'Relative Strength',
    functionalHyperTrophy = 'Functional HyperTrophy',
    hyperTrophy = 'Hyper Trophy',
    strEndurance = 'Strength Endurance',
    none = 'none',
}

export interface IWorkoutState {
    currentWorkoutType: WorkoutType
    currentRepRange?: Array<String>
}

export function checkIndex(workOutValue) {
    let ret;
    Object.keys(WorkoutType).forEach((element, index)  => {
        if(WorkoutType[element] === workOutValue) {
            ret = index;
        }
    });
    return ret;
}