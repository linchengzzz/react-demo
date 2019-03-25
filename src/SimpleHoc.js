import React, {Component} from 'react';

const SimpleHoc = WrappedComponent => {
    console.log('SimpleHoc');
    return class extends Component {
        render() {
            return <WrappedComponent {...this.props }/>
        }
    }
};

export default SimpleHoc;
