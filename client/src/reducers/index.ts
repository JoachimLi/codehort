import { PayloadAction } from '@reduxjs/toolkit';
import { ILesson } from '../interfaces/lesson';

type initialState = {
  lesson: ILesson;
};

const initialState: initialState = {
  lesson: { name: '', numberOfTasks: 0 },
};

//TODO: need to update the type of state in this example
function reducer(state = initialState, action: PayloadAction): any {
  switch (action.type) {
    case 'SET_LESSON':
      return { ...state, user: action.payload };
  }
  return state;
}

export type RootState = ReturnType<typeof reducer>;

export default reducer;