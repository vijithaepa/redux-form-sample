import React, {Component} from 'react';
import RegistryForm from "./compoenents/RegisterForm";
import {SubmissionError} from "redux-form";

class RegisterFormContainer extends Component {

    submit = values => {
        if(['a@b.c', 'b@c.d'].includes(values.email)) {    // real life this would check the DB
            throw new SubmissionError({
                email: 'email address is already taken'
            });
        } else {
            console.log(JSON.stringify(values, null, 4));
        }

    };

    getInitValues() {
        return {
            name: '',
            preference: 'spaces',
            newsletter: true
        }
    }

    render() {

        return (
            <RegistryForm onSubmit={this.submit} initialValues={this.getInitValues()}/>
        );
    }
}

export default RegisterFormContainer;
