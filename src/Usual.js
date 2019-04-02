import React, { Component } from 'react';
import hijackRenderHoc from './components/hijackRenderHoc';
import GlobalHoc from './GlobalHoc';

@GlobalHoc
@hijackRenderHoc({ type: 'add-style', style: { color: 'red' } })
class Usual extends Component {
    constructor() {
        super();
        this.state = {
            usual: 'usual',
        };
    }

    componentDidMount() {
        console.log('didMount');
        console.log(this.props, 'props');
    }

    render() {
    
        return <div>Usual</div>;
    }
}

export default Usual;
