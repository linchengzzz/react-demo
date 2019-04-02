import React, {Component} from 'react';

const SimpleHoc = WrappedComponent => class extends Component {
    render() {
        return <WrappedComponent {...this.props}/>
    }
};

export default SimpleHoc;
