import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form action="#" method="post">
                <fieldset class="col-md-6">
                    <input type="text" name="name" placeholder="Name..." />
                </fieldset>
                <fieldset class="col-md-6">
                    <input type="email" name="email" placeholder="Email..." />
                </fieldset>
                <fieldset class="col-md-6">
                    <input type="text" name="phone" placeholder="Phone..." />
                </fieldset>
                <fieldset class="col-md-6">
                    <input type="text" name="subject" placeholder="Subject..." />
                </fieldset>
                <fieldset class="col-md-12">
                    <textarea name="message" id="message" rows="5" placeholder="Message..."></textarea>
                </fieldset>
                <fieldset class="col-md-12">
                    <button class="main-button">Send Message</button>
                </fieldset>
            </form>
        );
    }
}
export default Form;
