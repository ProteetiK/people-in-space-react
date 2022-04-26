import L from 'leaflet'
import iconFile from './iss.png'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';

const Icon = L.icon({
    iconUrl: iconFile,
    iconSize: [50, 50],
    className: 'iss-icon'
})

export default Icon