import React, {Component} from 'react';

const refHoc = WrappedComponent => class extends Component {
	componentDidMount() {
		console.log(this.instanceComponent, 'instanceComponent');
	}
	render() {
		return (
			<WrappedComponent a={1} {...this.props} ref={instanceComponent => this.instanceComponent = instanceComponent}/>
		)
	}
}

export default refHoc;
