import {MethodExpression} from '../expressions/method_expression';
import {IExpression} from '../expressions/iexpression';

export class Hour extends MethodExpression {

    constructor(ex: IExpression) {
        super();

        this.expressions = [ex];
    }

    public methodName: string = 'hour';
}
