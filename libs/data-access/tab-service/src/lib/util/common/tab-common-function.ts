export namespace TabCommonFunction {

    export function getFormBuilderType(dataType: number) {
        if (dataType == 1 || dataType == 7 || dataType == 13)
            return 'textfield';
        else if (dataType == 2 || dataType == 3 || dataType == 4)
            return 'number';
        else if (dataType == 5 || dataType == 6)
            return 'datetime';
        else
            return 'textfield';
    }

    export function getFieldsType(dataType: number, isLookup: any): string {
        if (isLookup && dataType != 6) {
            return 'string';
        }
        if (dataType == 1 || dataType == 2 || dataType == 16)
            return 'number';
        else if (dataType == 3)
            return 'boolean';
        else if (dataType == 4 || (dataType >= 7 && dataType <= 15))
            return 'string';
        else if (dataType = 5)
            return 'Date';
        else if (dataType == 6)
            return 'date';
        else
            return 'string';
    }

    export function validateJSON(str: string) {
        try {
            const json = JSON.parse(str);
            if (Object.prototype.toString.call(json).slice(8, -1) !== 'Object') {
                return false;
            }
        } catch (e) {
            return false;
        }
        return true;
    }

    export function getRelationalOperatorValueToNumber(dataType: string) {
        switch (dataType) {
            case 'greaterthan':
                return 1;
            case 'lessthan':
                return 2;
            case 'equal':
                return 3;
            case 'in':
                return 4;
            case 'notin':
                return 5;
            case 'isnull':
                return 6;
            case 'isnotnull':
                return 7;
            case 'notequal':
                return 8;
            case 'greaterthanorequal':
                return 9;
            case 'lessthanorequal':
                return 10;
            case 'contains':
                return 11;
            case 'notcontains':
                return 12;
            case 'startswith':
                return 14;
            case 'notstartswith':
                return 14;
            case 'endswith':
                return 15;
            case 'notendswith':
                return 16;
            case 'between':
                return 17;
            case 'notbetween':
                return 18;
            case 'splitcontains':
                return 19;
            case 'notsplitcontains':
                return 20;
        }
        return 0;
    }

    export function getRelationalOperatorValueToString(dataType: number) {
        switch (dataType) {
            case 1:
                return "greaterthan";
            case 2:
                return "lessthan";
            case 3:
                return "equal";
            case 4:
                return "in";
            case 5:
                return "notin";
            case 6:
                return "isnull";
            case 7:
                return "isnotnull";
            case 8:
                return "notequal";
            case 9:
                return "greaterthanorequal";
            case 10:
                return "lessthanorequal";
            case 11:
                return "contains";
            case 12:
                return "notcontains";
            case 13:
                return "startswith";
            case 14:
                return "notstartswith";
            case 15:
                return "endswith";
            case 16:
                return "notendswith";
            case 17:
                return "between";
            case 18:
                return "notbetween";
            case 19:
                return "splitcontains";
            case 20:
                return "notsplitcontains";
        }
        return '';
    }

    export function getFilterValueTypeInString(type: number) {
        let val = '';
        if (type == 1) {
            val = 'Literal';
        } else if (type == 2) {
            val = 'Parameter';
        } else if (type == 3) {
            val = 'Property'
        } else if (type == 4) {
            val = 'Global'
        }
        return val;
    }

    export function getConjuctionClauseName(type: number) {
        var clause = 'and';
        if (type == 1) {
            clause = 'and';
        } else if (type == 2) {
            clause = 'or';
        }
        return clause;
    }

    export function getConjuctionClause(type: string) {
        let clause = 1;
        if (type == 'and') {
            clause = 1;
        } else if (type == 'or') {
            clause = 2;
        }
        return clause;
    }

    export function getFilterType(element: any) {
        let val = '';
        if (element.ValueType == 1) {
            val = element.Value;
        } else if (element.ValueType == 2) {
            val = '@' + element.Value;
        } else if (element.ValueType == 3) {
            val = '((' + element.Value + '))';
        } else if (element.ValueType == 4) {
            val = '[[' + element.Value + ']]';
        }
        return val;
    }

    export function getFilterValueTypeInInt(type: string) {
        let val = 0;
        if (type == 'Literal') {
            val = 1;
        } else if (type == 'Parameter') {
            val = 2;
        } else if (type == 'Property') {
            val = 3
        } else if (type == 'Global') {
            val = 4
        }
        return val.toString();
    }
}
