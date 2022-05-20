import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ICard {
    id: string;
    front: string;
    back: string;
}

export interface ICardState {
    cards: {
        [id: string]: ICard;
    }
}

const initialState: ICardState = {
    cards: {}
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state: ICardState, action: PayloadAction<ICard>) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

// Selector
export const selectCards = (state: RootState) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;