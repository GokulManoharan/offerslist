import reducer, { fetchOfferList, initialState } from './index'
import mockData from '../../../testHelpers/offersMockData.json'

describe('exampleSlice', () => {
    describe('reducers', () => {

        it('sets fetching true when fetchOfferList is pending', () => {
            const action = { type: fetchOfferList.pending.type };
            const state = reducer(initialState, action);
            expect(state).toEqual({ list: [], loading: true,  error: null });
        });

        it('sets the list when fetchOfferList is fulfilled', () => {
            const action = { type: fetchOfferList.fulfilled.type, payload: mockData };
            const state = reducer(initialState, action);
            expect(state).toEqual({ list: mockData, loading: false, error: null });
        });

        it('sets fetching false when fetchOfferList is rejected', () => {
            const action = { type: fetchOfferList.rejected.type, payload: { error: "Something went wrong. Offer list not found" } };
            const state = reducer(initialState, action);
            expect(state).toEqual({ list: [], error: "Something went wrong. Offer list not found", loading: false });
        });
    });

})