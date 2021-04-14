import React from 'react';
import Map from './map';
import { Provider } from "react-redux";
import store from "../store/store";
import showResults from "../component/showResults";
import SimpleForm from "../component/SimpleForm";

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
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row">
                            <Provider store={store}>
                                <div style={{ padding: 15 }}>
                                    <SimpleForm onSubmit={showResults} />
                                </div>
                            </Provider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Kontak;