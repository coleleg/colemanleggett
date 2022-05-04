import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards: [ "Gym-Crm", "Gym-Crm", "Gym-Crm", "Gym-Crm"]
}

const cardSlice = createSlice({
    name: "card",
    initialState, 
    reducers: {}
})

export const selectCards = state => state.card.cards;

export default cardSlice.reducer;
