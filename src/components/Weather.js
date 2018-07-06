import React from 'react';

class Weather extends React.Component {
    render(){
        return (
            //displays on if true
            <div>
            {this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country } </p>}
            {this.props.temperature && <p>Temperature: { this.props.temperature }&#8451; </p>}
            {this.props.humidity && <p>Humidity: { this.props.humidity }% </p>}
            {this.props.description && <p>Current Conditions: { this.props.description } </p> }
            </div>
        );
    }
}

export default Weather;