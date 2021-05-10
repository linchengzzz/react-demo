import React, {Component} from 'react';

const GlobalHoc = WrappedComponent => class extends Component {
    axios() {
        console.log(11111);
    }
    render() {
        return (
            <WrappedComponent {...this.props} $_axios={this.axios} />
        )
    }
}

export default GlobalHoc;
