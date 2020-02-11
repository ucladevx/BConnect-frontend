import { connect } from 'react-redux';
import { register } from '../reducers/auth'
import { push } from 'connected-react-router';
import Signup from '../components/Signup';


const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = dispatch => ({
    register: (email, password) => {
        dispatch(register(email, password));
    },
    push
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);