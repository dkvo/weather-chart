import React, {Component} from 'react';

export default class GoogleMap extends Component {

    componentDidMount() {
        const map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
        new google.maps.Marker({
            map,
            position: new google.maps.LatLng(this.props.lat, this.props.lon)
        });
    }

    render() {
        return <div ref="map" />;
    }
}
