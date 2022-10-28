export namespace TabGridClasses {
    export class JqWidghtModel {
        width?: number | any;
        height?: number | any;
        source?: SourceModel;
        columns?: Array<ColumnDetailModel>;
        isPageable?: boolean;
        isAutoheight?: boolean;
        isSortable?: boolean;
        selectionmode?: string;
        columngroups?: Array<ColumngroupModel>;
        isAltRow?: boolean;
        isenabletooltips?: boolean;
        iseditable?: boolean;
        sourceId?: string;
        typeOfData?: string;
        actualData?: Array<any>;
        dataField?: Array<DataFieldsModel>;
        actionArray?: Array<ActionModel>;
        isShowToolbar?: boolean;
        isShowStatusBar?: boolean;
        actionsIn?: string;
        isFilterable?: boolean;
        isSortbackGroungColor?: boolean;
        isautoshowfiltericon?: boolean;
        isshowfilterrow?: boolean;
        pagermode?: string;
        isGroupable?: boolean;
        isRowlevelEdit?: boolean;
        isRowlevelDelete?: boolean;
        isRowlevelView?: boolean;
        primaryKeycolumnName?: string;
        gridId?: string;
        id?: string;
        groups?: any;
        groupColumns?: string;
        gridColumnArr?: Array<string> | any;
        theme?: string;
        pagesizeoptions?: string;
        defaultPageSize?: string;
        currentScreenId?: string;
        customNavigate?: string;
        gridName?: string;
        gridState?: string | any;
        iscolumnsreorder?: boolean;
        isStateB?: boolean;
        addScreenId?: string;
        editScreenId?: string;
        viewScreenId?: string
    }

    export class SourceModel {
        datatype?: string;
        datafields?: Array<DataFieldsModel>;
        id?: string;
        localdata?: any;
        pagesize?: string;
    }

    export class DataFieldsModel {
        name?: string;
        type?: string;
        seq?: number;
    }

    export class ColumnDetailModel {
        text?: string;
        dataField?: string;
        width?: string;
        cellsalign?: string;
        cellsformat?: string;
        columnType?: string;
        columnGroup?: string;
        editable?: boolean;
        buttonclick?: any;
        renderer?: any;
        columntype?: string;
        filtertype?: string;
        seq?: number;
        align?: string;
        sortable?: boolean;
        hidden?: boolean;
        filterable?: boolean;
        cellsrenderer?: any;
        filterParameter?: string;
        addScreenId?: string;
        editScreenId?: string;
        viewScreenId?: string;
        appFieldId?: string;
        isPrimaryKey?: boolean;
        LookUpDetails?: any;
        dropDownLookup?: any;
        SystemDBFieldName?: any;
    }

    export class ColumngroupModel {
        text?: string;
        align?: string;
        name?: string;
    }

    export class ActionModel {
        name?: string;
        imgSrc?: string;
        buttonWidth?: number;
        buttonHeight?: number;
        buttonValue?: string;
        imgPosition?: string;
        textPosition?: string;
        textImageRelation?: string;
    }

    export class ColumnLevelActions {
        name?: string;
        rowId?: number;
        valueToShow?: string;
    }
}