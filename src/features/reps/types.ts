export const UPDATE_WORKOUT_TYPE = 'UpdateWorkoutType';
export const INIT_WORKOUT_TYPE = 'InitWorkoutType';

export const relativeRepRange = 
[
    [
        "1",
        "3,2,1,1,2,3",
        "3,2,1,3,2,1",
        "3,3,2,2,1,1",
    ],
    [
        "1-2",
        "1,6,1,6,1,6",
        "3,3,3,2,2,2",
        "5,3,3,2,2,1",
        "1,1,3,3,5,5",
        "5,3,1,1,3,5",
        "5,3,1,5,3,1",
        "5,5,3,3,1,1",
        "1,2,3,4,5",
        "5,3,3,2,2",
        "5,4,3,2,1",
    ],
    [
        "(1/1/1/1/1)",
        "5,3,2,5,3,2"
    ],
    [
        "4/2/2",
        "2,2,4,4,6,6",
        "5,4,3,3,4,5",
        "5,4,3,5,4,3",
        "5,5,5,3,3,3",
        "6,4,2,2,4,6",
        "6,4,2,6,4,2",
        "6,6,4,4,2,2",
        "2-4",
        "5,3,5,3,5",
    ],
    [
        "(3/1/1/1)",
        "5/3/3",
        "3,3,5,5,7,7",
        "7,5,3,3,5,7",
        "7,5,3,7,5,3",
        "7,7,5,5,3,3",
        "3-5",
    ]
];

export const fnHyperRepRange = 
[
    [
        "6/4/4",
        "6/6/6",
        "4,4,6,6,8,8",
        "8,6,4,4,6,8",
        "8,6,4,8,6,4",
        "8,8,6,6,4,4",
        "4,5,6,7,8",
        "8,7,6,5,4",
        "4-6",
        "4,4,8,8,8",
        "5,5,5,9,9",
        "6,6,6,8,8",
        "8,6,4,4,12",
        "8,8,6,6"
    ],
    [
        "7/5/5",
        "5,5,7,7,9,9",
        "9,7,5,9,7,5",
        "9,9,7,7,5,5",
        "7,7,5,5,12",
        "8,8,8,6,6",
        "5-7",
        "6,6,6,10,10",
        "6,6,8,8,10",
        "10,10,6,6,6",
        "6,7,8,9",
        "9,8,7,6"
    ],
    [
        "8/6/6",
        "10,8,6,6,8,10",
        "10,8,6,10,8,6",
        "11,9,7,5",
        "6-8",
    ]
];

export const hyperRepRange = 
[
    [
        "9/7/5",
        "9/7/7",
        "10,10,8,8,8",
        "6,8,10,12",
        "12,8,8,8",
        "12,10,8,6",
        "7-9",
        "8,8,8,12,12",
        "12,10,8,8",
    ],
    [
        "10/8/6",
        "10/8/8",
        "10/10/10",
        "12,10,8,6,5",
        "8-10",
        "12,12,10,10,8",
        "12,10,8,12"
    ],
    [
        "9-11",
        "15,12,10,10"
    ],
    [
        "12/10/8",
        "15,12,10",
        "10-12",
    ]
];

export const strEndureRepRange = 
[
    [
        "10,12,15,20",
        "20,15,12,10",
    ],
    [
        "12,12,20",
    ],
    [
        "15/15/15",
        "12-15"
    ],
    [],
    [],
    [],
    [
        "10,15,20,30",
        "30,20,15,10"
    ],
    [
        "20/10/10",
        "20/20/20",
        "15,15,30",
        "15-20",
        "20-25",
        "20,20,50",
        "30/15/15",
        "20,30,50",
        "50,30,20",
        "20-30",
        "30-40",
        "40-50",
    ]
];

export interface IRepSchemeState {
    currentRepRange: []
}