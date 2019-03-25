import React, {Component} from 'react';
import SimpleHoc from './SimpleHoc';

@SimpleHoc
class Usual extends Component {
    render() {
        console.log(this.props, 'props');
        return (
            <div>
                Usual
            </div>
        );
    }
}

export default Usual;
