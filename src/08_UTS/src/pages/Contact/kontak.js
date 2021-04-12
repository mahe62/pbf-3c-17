import React from 'react';

class Kontak extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        {/* <div class="map-holder">
                        <div id="map_canvas" class="map-canvas b" style={{height: '360px;'}}></div>
                    </div> */}
                        <div class="row pb-5">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe width="100%" height="380" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3381167535927!2d100.56528351483051!3d13.758472190343108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzMwLjUiTiAxMDDCsDM0JzAyLjkiRQ!5e0!3m2!1sid!2sid!4v1617965436410!5m2!1sid!2sid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Kontak;