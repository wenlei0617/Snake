import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Foods')
@observer
class Foods extends Component {
    render() {
        let { top, left } = this.props.Foods;
        return (
            <div 
                className="foods"
                style={{top:`${top}px`, left:`${left}px`}}></div>
        );
    }
}

export default Foods;