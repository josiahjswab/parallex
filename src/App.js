import React from 'react';
import NavBar from './NavDir/NavBar'

export default class App extends React.Component {
    
    render() {
        return (
            <div id='container'>
                <p>Hello World</p>
                <NavBar/>
            </div>
        )
    }
}
console.log('Hello World');
