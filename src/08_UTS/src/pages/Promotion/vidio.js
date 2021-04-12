import React from 'react';

class Video extends React.Component {
    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="video-holder">
                        <iframe width="860" height="480" frameborder="0" src="http://www.youtube.com/embed/TGFGEDbGThY" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
export default Video;