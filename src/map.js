import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Snake from './snake';
import Foods from './foods';

@inject('Maps','Snake')
@observer
class Maps extends Component {
    render() {
        const {width, height, popup, rank } = this.props.Maps;
        const { snakeLength, startMove, endMove, stop } = this.props.Snake;
        return (
            <div className="content">
                <div>
                    <p>键盘上下左右操控蛇</p>
                    <p>当前长度：{snakeLength}</p>
                    <p>当前等级：{rank}</p>
                    <p>
                        <button onClick={startMove}>重新开始</button>
                        <button onClick={stop?startMove:endMove.bind(null,true)}>{stop?'开始':'暂停'}</button>                        
                    </p>
                </div>
                <div 
                    className={popup?'over maps':'maps'} 
                    style={{width:`${width}px`,height:`${height}px`}}>
                    <Snake/>
                    <Foods/>
                </div>
            </div>
        );
    }
}

export default Maps;