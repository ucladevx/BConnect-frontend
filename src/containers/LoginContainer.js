import { connect } from 'react-redux';
import { login } from '../reducers/auth'
//import { push } from 'connected-react-router';
import Login from '../Components/Login';
import {withRouter} from 'react-router-dom'


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));