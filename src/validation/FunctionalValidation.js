import {SubmissionError} from "redux-form";

export const required = value => {
    return value ? undefined: 'Value is required';
};

export const minLength = value => {
    return value.length < 4 ? 'Value is too short': undefined;
};

export const maxLength = value => {
    return value.length > 10 ? 'Value is too long': undefined;
};

export const matchesPassword = (value, allValues) => {
    return value === allValues.password ? undefined: "Password should match the Confirm Password";
};

export const asyncValidate = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep (3000);
    if(['Ranuka', 'Tom', 'Peter', 'Roy'].includes(values.userName)) {
        return Promise.reject({
            userName: 'User Name already taken'
        });
    }
};