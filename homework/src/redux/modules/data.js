// data.js

// Actions
const LOAD = 'data/LOAD';
const UPDATE = 'data/UPDATE';
const initialState = {list: [
  {id: 0, day: "일요일", rank: 0},
  {id: 1, day: "월요일", rank: 0},
  {id: 2, day: "화요일", rank: 0},
  {id: 3, day: "수요일", rank: 0},
  {id: 4, day: "목요일", rank: 0},
  {id: 5, day: "금요일", rank: 0},
  {id: 6, day: "토요일", rank: 0},
]};

// Action Creators
export function loadData(data) {
  return { type: LOAD, data };
};

export function updateData(data_arr){
  return { type: UPDATE, data_arr};
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      console.log(state, action);
      const new_data_list = [...initialState, action.data];
      return {list: new_data_list};
    case UPDATE: 
      const update_data_list = state.list.map(v => v.day === action.data_arr[0] ? {...v, rank: parseInt(action.data_arr[1])} : v);
      return {list: update_data_list};
    default: return state;
  }
}
