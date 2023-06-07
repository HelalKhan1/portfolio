
import React,  { Component } from "react";


class CircularProgressBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.styles ={
          '--offset' : props.offset,
        };

        this.state = {
          counter: 0
        };
      }
    
      componentDidMount() {
        this.interval = setInterval(() => {
          if (this.state.counter >= this.props.percentage) {
            clearInterval(this.interval);
          } else {
            this.setState(prevState => ({
              counter: prevState.counter + 1
            }));
          }
        }, 22);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

      

      render() {
    
    return (
        <>
            <div class="circle-bar">
                <div class="outer">
                    <div class="inner">
                        <div id="number">
                        {this.state.counter}%
                        </div>
                    </div>
                </div>


                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle  cx="70" cy="70" r="60" stroke-linecap="round" style={this.styles}
                        strokeWidth="20"  stroke="url(#GradientColor)" fill="none" 
                        strokeDasharray="360"
                        strokeDashoffset="360"
                    />
           
                </svg>
            </div>

        </>
    );
}
}

export default CircularProgressBar;