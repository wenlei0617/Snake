import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Snake','Maps')
@observer
class Snake extends Component {
    componentDidMount() {
        const { startMove } = this.props.Snake;
        window.addEventListener('keydown', this._keyUp.bind(this));
        startMove()
    }
    _keyUp(event) {
        const { move } = this.props.Snake;
        move(event.keyCode)
    }
    render() {
        return (
            <div className="snake">
                {this.props.Snake.square.map((item, index) => {
                    return (
                        <div key={index} style={{top:`${item[0]}px`,left:`${item[1]}px`}}></div>
                    )
                })}
            </div>
        );
    }
}

export default Snake;