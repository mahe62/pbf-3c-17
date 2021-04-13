import React from 'react';
import Form from './form';
import Map from './map';


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
                                <Map/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row">
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Kontak;