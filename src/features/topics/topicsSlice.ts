import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ITopic {
    id: string;
    name: string;
    icon: string;
    quizIds: Array<String>;
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
        }
    }
});

// Selector
export const selectTopics = (state: RootState) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;