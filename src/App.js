import React from 'react';
// import NavBar from './NavDir/NavBar'
import { Parallax, Background } from 'react-parallax';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const insideStyles = {
            background: "white",
            padding: 20,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "rgb(0 0 0 0)"
          };

        return (
            <div style={{minHeight: '2000px', maxWidth: '1000px', margin: 'auto'}}>
                <div style={{minHeight: '500px'}}>
                </div>
                <Parallax
                    blur={{ min: -2, max: 2 }}
                    bgImage={require('./img/road-220058.jpg')}
                    bgImageAlt="open road"
                    strength={500}
                >
                    hello
                    <div style={{ height: '500px' }}>
                        <div style={insideStyles}>This is where I decide my fate</div>
                    </div>
                </Parallax>

            </div>
        )
    }
}
