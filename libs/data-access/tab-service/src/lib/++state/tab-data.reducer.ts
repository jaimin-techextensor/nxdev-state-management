import { Action, createReducer, on } from '@ngrx/store';
import * as storage from './storage';
import * as tabDataActions from './tab-data.actions';

export interface State {
    tabData: any;
    tabsData: any;
}

export const initialState: State = {
    tabData: storage.getItem('tabData'),
    tabsData: storage.getItem('tabsData')
};

const tabDataReducer = createReducer(
    initialState,
    on(tabDataActions.tabData, (state, { tabData }) => tabData)
);

const tabsDataReducer = createReducer(
    initialState,
    on(tabDataActions.tabsData, (state, { tabsData }) => tabsData)
);

export function reducer(state: State | undefined, action: Action): any {
    return tabDataReducer(state, action);
}

export function reducers(state: State | undefined, action: Action): any {
    return tabsDataReducer(state, action);
}

export const getTabData = (state: State) => {
    if (state) {
        return state;
    }
    else {
        return undefined;
    }
};