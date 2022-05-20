import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ITopic {
    id: string;
    name: string;
    icon: string;
    quizIds: Array<string>;
}

export interface TopicState {
    topics: {
        [id: string]: ITopic;
    }
}

const initialState: TopicState = {
    topics: {},
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action: PayloadAction<ITopic>) => {
            state.topics[action.payload.id] = action.payload;
        },
        addQuizIdForTopic: (state, action: PayloadAction<{ topicId: string, quizId: string }>) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

// Selector
export const selectTopics = (state: RootState) => state.topics.topics;

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;