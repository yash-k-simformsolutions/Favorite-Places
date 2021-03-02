import React, { Component } from 'react';
import './MyMap.css';
import Map from 'mapmyindia-react';

export default class MyMap extends Component {
    render() {
        return (
            <div className="mymap">
                <Map 
                    className="mymap_Map"
                    markers = {[
                        {
                            position: [18.5341, 73.845],
                            draggable: true,
                            title: "Marker-Map",
                        }
                    ]}
                />
            </div>
        )
    }
}
