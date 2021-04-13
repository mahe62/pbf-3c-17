import React from 'react';

class Second extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>First Procedure</h2>
                        <span>(Pellentesque ligula lectus)</span>
                        <p>Praesent sit amet cursus urna. In nec lobortis tellus. Donec congue, urna non semper interdum, que nisi bibendum tellus, sed tempus tellus neque et leo. Cras laoreet mi sed nulla lobortis, epharetra eros laoreet.
        <br /><br />Maecenas vitae ornare arcu. Phasellus gravida congue turpis, eu bibendum lorem molestie eget. Phasellus tristique sapien non placerat eleifend. Nam quis velit non quam bibendum vestibulum ac et purus.</p>
                    </div>
                    <div class="col-md-6">
                        <h2>Second Procedure</h2>
                        <span>(In nec lobortis tellus)</span>
                        <ol class="no-color">
                            <li>Pellentesque ligula lectus, molestie quis magna lobortis, placerat imperdiet elit.</li>
                            <li>Praesent sit amet cursus urna. In nec lobortis tellus.</li>
                            <li>Donec congue, urna non semper interdum, que nisi bibendum tellus.</li>
                            <li>Cras laoreet mi sed nulla lobortis, epharetra eros laoreet.</li>
                            <li>Donec convallis elementum convallis. Duis ac purus sem. Fusce id nunc tellus.</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h2>Third Procedure</h2>
                        <span>(Donec convallis elementum convallis)</span>
                        <ol>
                            <li>
                                <h4>Pellentesque ligula lectus, molestie quis magna lobortis.</h4>
                                <p>Praesent sit amet cursus urna. In nec lobortis tellus. Donec congue, urna non semper         interdum, que nisi bibendum tellus, sed tempus tellus neque et leo. </p>
                            </li>
                            <li>
                                <h4>Cras laoreet mi sed nulla lobortis, epharetra eros laoreet.</h4>
                                <p>Donec convallis elementum convallis. Duis ac purus sem. Fusce id nunc tellus. Maecenas vitae ornare arcu. Phasellus gravida congue turpis, eu bibendum.</p>
                            </li>
                            <li>
                                <h4>Lorem molestie eget tristique sapien non placerat eleifend. </h4>
                                <p>Nam quis velit non quam bibendum vestibulum ac et purus. Fusce id nunc tellus. Maecenas vitae ornare arcu.</p>
                            </li>
                        </ol>
                    </div>
                    <div class="col-md-6">
                        <h2>Fourth Procedure</h2>
                        <span>(Nam quis velit non quam bibendum)</span>
                        <ol>
                            <li>
                                <h4>Pellentesque ligula lectus, molestie quis magna lobortis.</h4>
                                <ol class="no-color">
                                    <li>Praesent sit amet cursus urna. In nec lobortis tellus.</li>
                                    <li>Donec congue, urna non semper interdum.</li>
                                    <li>Que nisi bibendum tellus, sed tempus tellus neque et leo.</li>
                                    <li>Cras laoreet mi sed nulla lobortis, epharetra eros laoreet.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Donec convallis elementum convallis. Duis ac purus sem.</h4>
                                <ol class="no-color">
                                    <li>Fusce id nunc tellus. </li>
                                    <li>Maecenas vitae ornare arcu. </li>
                                    <li>Phasellus gravida congue turpis, eu bibendum lorem molestie eget. </li>
                                    <li>Phasellus tristique sapien non placerat eleifend.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }

}
export default Second;