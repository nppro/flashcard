import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { addQuizIdForTopic } from '../topics/topicsSlice';

export interface IQuiz {
    id: string;
    name: string;
    topicId: string;
    cardIds: Array<string>;
}

export interface IQuizState {
    quizzes: {
        [id: string]: IQuiz;
    }
}

const initialState: IQuizState = {
    quizzes: {}
}

export const addQuizForTopicId = (quiz: IQuiz): AppThunk => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({ topicId, quizId: id }))
    }
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

// Selector
export const selectQuizzes = (state: RootState) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;