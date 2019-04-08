import React from 'react';
import ReactJson from "react-json-view";
import './index.css';
import cx from 'classnames';
import {Field} from "redux-form";


const getValidityClassName = meta => {
    if (meta.asyncValidating) {
        return 'async-validating';
    }

    if (meta.active) {
        return;
    } else if (meta.touched && meta.invalid) {
        return 'invalid';
    } else if (meta.touched && meta.valid) {
        return 'valid';
    }


};

export const customInput = props => {
    const {label, input, type, meta} = props;

    return (
        <div className={cx(
            'custom-input-container',
            {'flex-row-revers': type === 'checkbox'},
            {dirty: meta.dirty},
            getValidityClassName(meta)
        )}>
            <label>{props.label}</label>
            <input {...props.input} type={props.type} autoFocus={props.autoFocus}/>
            {meta.error && meta.touched && !meta.active && (
                <div className='feedback-text error-text'>
                    {meta.error}
                </div>
            )}
            {/*<ReactJson src={props}/>*/}
        </div>
    );
};

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
            {/*<ReactJson src={props.meta}/>*/}
        </div>
    );
};

export const discounts = ({fields}) => (
    <div className="custom-field-array-container">
        {fields.map((code, index) => (
            <div key={index} className="field-array-item">
                <Field name={code} type="text" component={customInput} label={`Discount Code #${index + 1}`}
                autoFocus />
                <button type="button" onClick={() => fields.remove(index)}>&times</button>
            </div>
        ))}
        <button type="button" onClick={() => fields.push()} > Add {!fields.length ? 'Discount Code(s)': 'Another'}</button>
    </div>
);


