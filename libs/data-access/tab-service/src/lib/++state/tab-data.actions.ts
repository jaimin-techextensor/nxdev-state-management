import { createAction, props } from '@ngrx/store';

export const TAB_DATA = '[Tab Data] Data';
export const TABS_DATA = '[Tabs Data] Data';

export const tabData = createAction(
    TAB_DATA,
    props<{ tabData: any }>()
);

export const tabsData = createAction(
    TABS_DATA,
    props<{ tabsData: any }>()
);