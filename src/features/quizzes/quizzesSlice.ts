import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuiz {
    id: string;
    name: string;
    topicID: string;
    cardIds: Array<String>;
}

export interface IQuizState {
    quizzes: {
        [id: string]: IQuiz;
    }
}

const initialState: IQuizState = {
    quizzes: {}
}


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state: IQuizState, action: PayloadAction<IQuiz>) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;