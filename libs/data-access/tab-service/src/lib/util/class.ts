import * as enums from './enum';

export namespace TabClasses {

  export class APIQuery {
    QueryObjectID: string | any;
    QueryType: enums.TabEnums.QueryType | any;
    Joins: JoinDetails[];
    WhereClause: APIFilterCriteria;

    constructor() {
      this.Joins = new Array<JoinDetails>();
      this.WhereClause = new APIFilterCriteria();
    }
  }

  export class APIInsertQuery extends APIQuery {
    Values: APIValueSets[] = []
  }

  export class APIUpdateQuery extends APIQuery {
    Values: APIValueSets[] = []
  }

  export class APIDeleteQuery extends APIQuery {
  }

  export class APISelectQuery extends APIQuery {
    ResultField_AppfieldIds: string[] = [];
    Sort: APISort[] = [];
    Distinct: boolean = false;
    NoLock: boolean = false;
    TopCount?: number;
    LoadLookUpValues: boolean = false;
  }

  export class JoinDetails {
    JoinType: enums.TabEnums.JoinType | any;
    Relationship: ChildRelationShip | any;
  }

  export class ChildRelationShip {
    RelSourceObjectID: string | any;
    RelSourceFieldID: string | any;
    RelTargetObjectID: string | any;
    RelTargetFieldID: string | any;
    LocalId!: string;
    childDetails!: LookUpDetails;
  }

  export class APIFilterCriteria {
    Filters: APIFilter[] | any;
    FilterLogic: string | any;
  }

  export class APIFilter {
    // ID: string;
    ConjuctionClause: enums.TabEnums.ConjuctionClause | any;
    FieldID: string | any;
    RelationalOperator: enums.TabEnums.RelationalOperator | any;
    ValueType: enums.TabEnums.FilterValueType | any;
    value: string | any;
    Sequence: number | any;
    GroupID: number | any;
    parameterName: string | any;
    Value: string | any;
  }

  export class APIValueSets {
    AppFieldID: string | any;
    Value: string | any;
  }

  export class APISort {
    ID: string | any;
    FieldID: string | any;
    SortSequence: enums.TabEnums.SortSequence | any;
    Sequence: number | any;
  }

  export class APIParameters {
    ID: string | any;
    ParameterName: string | any;
    DataSourceQueryID: string | any;
    MappingFieldName: string | any;
  }

  export class Application {
    ID: string | any;
    AppName: string | any;
    DisplayName: string | any;
    PlatformVersion: string | any;
    AppVersion: string | any;
    Description: string | any;
    AppObjects: AppObject[] = [];
    AppScreens: AppScreen[] = [];
    AppMenus: AppMenu[] = [];
    AppConfigurations: Configurations[] = [];
    Roles: Role[] = [];
    Profiles: Profile[] = [];
    WorkFlows: any[] = [];
  }

  export class Role {
    ID: string | any;
    RoleName: string | any;
    Description: string | any;
    ParentRole: Role | any;
  }

  export class Configurations {
    ID: string | any;
    Setting_Key: string | any;
    Value: string | any;
  }

  export class AppMenu {
    ID: string | any;
    MenuName: string | any;
    DisplayName: string | any;
    ScreenID: string | any;
    ShortCut: string | any;
    Icon: string | any;
    ParentID?: number;
    Sequence?: number;
    Url: string | any;
  }

  export class AppScreen {
    ID: string | any;
    Name: string | any;
    Description: string | any;
    DataSourceQuery: DataSourceQueries | any;
    Container: string | any;
    ScreenType: number | any;
    DataSourceQueryID: string | any;
  }

  export class AppObject {
    ID: string | any;
    ObjectName: string | any;
    DisplayName: string | any;
    Description: string | any;
    EnableTracking!: boolean | false;
    AllowSearchable!: boolean | false;
    CreationType: enums.TabEnums.ObjectCreationType | any;
    AllowReports!: boolean | false;
    AllowActivities!: boolean | false;
    AllowSharing!: boolean | false;
    DeploymentStatus: enums.TabEnums.DeploymentStatus | any;
    Fields: AppFields[] = [];
    ChildRelationShips: ChildRelationShip[] = [];
    DataSourceQueries: DataSourceQueries[] = [];
    SystemDBTableName: string | any;
    AccessList: ObjectAccess[] = [];
    EmailTemplates: EmailTemplate[] = [];
    Resources: Resources[] = [];
    IsSystem!: boolean | false;
    IsVisible!: boolean | false;
    IsDeprecated!: boolean | false;
    ObjectID_Tosave: string | any;
  }

  export class ObjectAccess {
    ID!: string;
    ProfileID!: Profile;
    IsVisible!: boolean;
    IsReadOnly!: boolean;
    CanCreate!: boolean;
    CanEdit!: boolean;
    CanDelete!: boolean;
  }

  export class Resources {
    ID!: string;
    Value!: string;
  }

  export class EmailTemplate {
    ID!: string;
    Template!: string;
  }

  export class DataSourceQueries {
    ID!: string;
    ObjectID!: AppObject;
    ObjectID_Tosave!: string;
    QueryName!: string;
    DisplayName!: string;
    Fields: DataSourceQueries_Fields[] = [];
    Filters!: FilterCriteria;
    Sort: Sort[] = [];
    Parameters: Parameters[] = [];
  }

  export class DataSourceQueries_Fields {
    Field!: AppFields;
    SeqNo!: number;
    Field_GridAttributes!: string;
    LookupDetails!: string;
  }

  export class Parameters {
    ID!: string;
    ParameterName!: string;
    DataSourceQueryID!: string;
    MappingFieldName!: string;
  }

  export class Sort {
    ID!: string;
    Field!: AppFields;
    SortSequence!: enums.TabEnums.SortSequence;
    Sequence!: number;
  }

  export class FilterCriteria {
    Filters!: Filter;
    FilterLogic!: string;
  }

  export class Filter {
    ID!: string;
    ConjuctionClause!: enums.TabEnums.ConjuctionClause;
    Field!: string;
    RelationalOperator!: enums.TabEnums.RelationalOperator;
    ValueType: any;
    value!: string;
    Sequence!: number;
    GroupID!: number;
  }

  export class AppFields {
    ID!: string;
    ObjectID!: AppObject;
    FieldName!: string;
    DisplayName!: string;
    FieldType!: FieldType;
    Description!: string;
    CreationType!: enums.TabEnums.ObjectCreationType;
    IsRequired!: boolean;
    IsUnique!: boolean;
    IsSearchable!: boolean;
    IsConfidential!: boolean;
    SystemDBFieldName!: string;
    IsSystem!: boolean;
    IsVisible!: boolean;
    IsDeprecated!: boolean;
    LookUpDetails!: LookUpDetails;
    AccessList!: FieldAccess[];
    Data!: string;
    IsPrimaryKey!: boolean;
    Field!: AppFields
  }

  export class FieldType {
    DataType!: enums.TabEnums.DataTypes;
    RelationalOperator!: enums.TabEnums.RelationalOperator[];
  }

  export class LookUpDetails {
    LookupObject!: string;
    LookupField!: string;
    DisplayField!: string;
  }

  export class FieldAccess {
    ID!: string;
    ProfileID!: Profile;
    IsVisible!: boolean;
    IsReadOnly!: boolean;
  }

  export class Profile {
    ID!: string;
    ProfileName!: string;
    Description!: string;
  }

  export class UpdateQueryParameter {
    FieldName!: string;
    FieldValue!: string | number;
  }

  export class ScreenParameter {
    constructor() { }
    event: any;
    formJson: any;
    formIOObject: any;
  }
}
