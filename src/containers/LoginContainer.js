import { connect } from 'react-redux';
import { login } from '../reducers/auth'
import Login from '../components/Login';


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(login(email, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);