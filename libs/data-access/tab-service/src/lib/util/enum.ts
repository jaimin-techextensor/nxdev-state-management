export namespace TabEnums {
  export enum QueryType {
    Select, Insert, Update, Delete, Upsert
  }

  export enum JoinType {
    LeftJoin = 1, RightJoin = 2
  }

  export enum ConjuctionClause {
    AND = 1, OR = 2, AND_NOT = 3, OR_NOT = 4
  }

  export enum RelationalOperator {
    GreaterThan = 1,
    LessThan = 2,
    EqualTo = 3,
    IN = 4,
    NOTIN = 5,
    IsNULL = 6,
    IsNotNULL = 7,
    NotEqualTo = 8,
    GreaterThanOREqualTo = 9,
    LessThanOREqualTo = 10,
    Contains = 11,
    NotContains = 12,
    StartsWith = 13,
    NotStartsWith = 14,
    EndsWith = 15,
    NotEndsWith = 16,
    Between = 17,
    NotBetween = 18,
    SplitContains = 19,
    NotSplitContains = 20
  }

  export enum FilterValueType {
    Literal = 1, Parameter = 2, Property = 3, Global = 4
  }

  export enum ObjectCreationType {
    Standard = 1, Custom = 2
  }

  export enum DeploymentStatus {
    InDevelopment = 1, Deployed = 2
  }

  export enum DataTypes {
    AutoNumber = 1,
    Number = 2,
    CheckBox = 3,
    Currency = 4,
    Date = 5,
    DateTime = 6,
    Email = 7,
    GeoLocation = 8,
    Percent = 9,
    PhoneNumber = 10,
    PickList = 11,
    PickList_MultiSelect = 12,
    Text = 13,
    TextArea = 14,
    TextArea_RICHEDITOR = 15,
    URL = 16,
    UniqueIdentifier = 17,
    Insert_TimeStamp = 18,
    Update_TimeStamp = 19
  }

  export enum SortSequence {
    Asc = 1, Desc = 2
  }

  export enum UserPasswordExpiresIN {
    ThirtyDays = 1, SixtyDays = 2, NinetyDays = 3, HundredAndEightyDays = 4, OneYear = 5, NeverExpire = 6
  }

  export enum WorkFlowTriggerType {
    EventBased = 1, DateBased = 2
  }

  export enum WorkFlowEventExecution_WorkFlowTriggerEvent {
    Created = 1, Edited = 2, CreatedOrEdited = 3, Deleted = 4
  }

  export enum WorkFlowEventExecution_WorkFlowTriggerFieldCriteria {
    WhenAnyFieldIsUpdated = 1, WhenAnySelectedFieldIsUpdated = 2, WhenSelectedAllFieldsAreUpdated = 3
  }

  export enum WorkFlowEventExecution_WorkFlowTriggerOccurence {
    Everytime = 1, FirstTime = 2
  }

  export enum WorkFlowTimeExecution_DaysRelationalOperator {
    Before = 1, After = 2
  }

  export enum WorkFlowTimeExecution_ExecutionCycle {
    Once = 1, Weekly = 2, Monthly = 3, Yearly = 4, Daily = 5
  }

  export enum HTTPMethods {
    Post = 1, Put = 2, Delete = 3
  }
}

