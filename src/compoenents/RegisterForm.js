import React, {Component} from 'react';
import {Field, FieldArray, reduxForm} from "redux-form";
import {customInput, customSelect, discounts} from './Fields'
// import {validate} from '../validation'
import { required, maxLength, minLength, matchesPassword, asyncValidate} from '../validation/FunctionalValidation'
import './RegisterForm.css';
import capitalize from 'capitalize';


class RegistryForm extends Component {


    render() {
        const {handleSubmit} = this.props;

        return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstName"
                    component={customInput}
                    type="text"
                    label="First Name"
                    validate={[required]}
                    normalize={capitalize}
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    component={customInput}
                    type="text"
                    label="Last Name"
                    validate={[required]}
                    normalize={capitalize}
                />
            </div>
            <div>
                <Field
                    name="email"
                    component={customInput}
                    type="email"
                    label="Email address"
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="userName"
                    component={customInput}
                    type="text"
                    label="User Name"
                    validate={[required, minLength, maxLength]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={customInput}
                    type="password"
                    label="Password"
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name="confirmPassword"
                    component={customInput}
                    type="password"
                    label="Confirm Password"
                    validate={[required, matchesPassword]}
                />
            </div>
            <div>
                <Field
                    name="preference"
                    component={customSelect}
                    label="Preferred Formatting"
                />
            </div>
            <div>
                <Field
                    name="newsletter"
                    component={customInput}
                    type="checkbox"
                    label="Sign up to Newsletter?"
                />
            </div>
            <FieldArray name='discountCodes' component={discounts} />
            <button type='submit'>Submit</button>
        </form>
        );

    }
}

// RegistryForm = reduxForm({
//     form: 'registerForm',
//     validate
// })(RegistryForm);

RegistryForm = reduxForm({
    form: 'registerForm',
    asyncValidate,
    asyncBlurFields: ['userName']
})(RegistryForm);

export default RegistryForm;