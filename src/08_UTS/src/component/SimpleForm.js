import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <fieldset class="col-md-6">
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name..."
                    /></fieldset>
            </div>
            <div>
                <fieldset class="col-md-6">
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email..."
                    /></fieldset>
            </div>

            <div>
                <fieldset class="col-md-6">
                    <Field
                        name="phone"
                        component="input"
                        type="text"
                        placeholder="Phone..."
                    /></fieldset>
            </div>
            <div>
                <fieldset class="col-md-6">
                    <Field
                        name="subject"
                        component="input"
                        type="text"
                        placeholder="Subject..."
                    /></fieldset>
            </div>
            <div>
                <fieldset class="col-md-12">
                    <Field
                        name="message"
                        component="textarea"
                        rows="5"
                        type="message"
                        placeholder="Message..."
                    /></fieldset>
            </div>
            <div>
                <fieldset class="col-md-12">
                    <button class="main-button" type="submit" disabled={pristine || submitting}>Send Message</button>
                </fieldset>
            </div>
        </form>
    );
};

export default reduxForm({
})(SimpleForm);
