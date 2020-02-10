import { connect } from 'react-redux';
import { register } from '../reducers/auth'
import Signup from '../components/Signup';


const mapStateToProps = state => ({
    authenticated: state.authenticated
});

const mapDispatchToProps = dispatch => ({
    register: (email, password) => {
        dispatch(register(email, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);