import { connect } from 'react-redux';
import { login } from '../reducers/auth'
//import { push } from 'connected-react-router';
import Login from '../Components/Login';
import {withRouter} from 'react-router-dom'
import { withCookies } from 'react-cookie'


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
    error: state.authReducer.error,
    token: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(login(email, password));
    }
});

export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)));