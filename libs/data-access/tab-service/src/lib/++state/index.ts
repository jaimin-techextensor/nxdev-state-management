import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import merge from "lodash.merge";
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromTabData from './tab-data.reducer';
const INIT_ACTION = '@ngrx/store/init';
const UPDATE_ACTION = '@ngrx/store/update-reducers';

export interface State {
    tabData: fromTabData.State
    tabsData: fromTabData.State
}

export const reducers: ActionReducerMap<State> = {
    tabData: fromTabData.reducer,
    tabsData: fromTabData.reducers
};

const mergeReducer = (state: State, rehydratedState: State, action: Action): State => {
    if ((action.type === INIT_ACTION || action.type === UPDATE_ACTION) && rehydratedState) {
        state = merge(state, rehydratedState);
    }
    return state;
}

const reducerKeys = ['tabData', 'tabsData'];

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: reducerKeys, rehydrate: true, mergeReducer })(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state: any, action: any) {
        // console.log('state', state);
        // console.log('action', action);
        return reducer(state, action);
    };
}

export const getTabDataState = createFeatureSelector<fromTabData.State>('tabData');

export const getTabData = createSelector(
    getTabDataState,
    fromTabData.getTabData
);

export const metaReducers: MetaReducer<State>[] = [debug, localStorageSyncReducer];
