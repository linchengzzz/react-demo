import React, { Component } from 'react';
import formCreate from './formCreate';

@formCreate
class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="" id="username">
                        账户
                    </label>
                    <input name="username" type="text" {...this.props.getField('username')}/>
                </div>
                <div>
                    <label htmlFor="" id="password">
                        密码
                    </label>
                    <input type="text" name="password" {...this.props.getField('password')}/>
                </div>
                <div onClick={this.props.handleSubmit}>提交</div>
                <div>other content</div>
            </div>
        );
    }
}

export default Login;
