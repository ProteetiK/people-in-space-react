import { React, Component } from 'react';
import styled from 'styled-components/macro'; 
import axios from 'axios';
import Map from './components/Map/Map';
import People from './components/People/People';

const Wrapper = styled.div`
    background-color: #fafafa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`

class App extends Component {
    state = {
        position: {
            lat: 0,
            lng: 0
        },
        zoom: 2,
        people: []
    }
    
    componentDidMount () {
        this.getSpaceData()
        this.intervalId = setInterval(() =>{
            this.getSpaceData()
        }, 5000)
    }

    componentWillUnmount () {
        clearInterval(this.intervalId)
    }
    getSpaceData = async () => {
        try {
            const locationURL = 'http://api.open-notify.org/iss-now.json'
            const peopleURL = 'http://api.open-notify.org/astros.json'
            const issLocationPromise = axios.get(locationURL)
            const peopleInSpacePromise = axios.get(peopleURL)

            const [ issLocation, peopleInSpace ] = await Promise.all([
                issLocationPromise,
                peopleInSpacePromise
            ])
            
            const position = {
                lat: issLocation.data.iss_position.latitude,
                lng: issLocation.data.iss_position.longitude
            }

            this.setState({ position, people: peopleInSpace.data.people })
        } catch (error) {
            console.log(error)
        }
    }

    handleViewPortChange = viewport => {
        if (viewport.zoom !== this.state.zoom)
            this.setState({ zoom: this.viewport.zoom })
    }
    
    render() {
        const { position, zoom, people } = this.state
        return (
            <Wrapper>
                <Content>
                    <Map position={position} onViewPortChange={this.handleViewPortChange} zoom={zoom} />
                    <People people={people} />
                </Content>
            </Wrapper>
        )
    }
}

export default App