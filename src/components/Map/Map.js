import React from "react";
import styled from "styled-components";
import Icon from './Icon'

import { MapContainer as LeafletMap, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

const Component = styled.div`
    width: 100%;

    & > div {
        width: 100%;
        height: 400px;
    }
`

const Map = ({ position, zoom, onViewPortChange }) => (
    <Component>
        <LeafletMap center={position} zoom={zoom} onViewPortChange={onViewPortChange}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker icon={Icon} position={position}>
                <Popup>
                    Latitude: {position.lat}
                    <br />
                    Longitude: {position.lng}
                </Popup>
                <Circle center={position} radius={75000} />
            </Marker>
        </LeafletMap>
    </Component>
)

export default Map