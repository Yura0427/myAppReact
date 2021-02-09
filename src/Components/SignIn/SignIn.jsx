import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import '../../App.css';
import { signIn } from "../../Redux/auth-reducer";
import { emailError, required } from "../../Shared/Validators";
import { Input } from "../Common/FormsControl";

const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Sign in</h3>
            <div className="form-group">
                <label>Email</label>
                <Field className="form-control"
                    name={'email'}
                    placeholder={'Enter email'}
                    type={"email"}
                    component={Input}
                    validate={[required, emailError]} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <Field className="form-control"
                    name={'password'}
                    placeholder={'Enter password'}
                    type={"password"}
                    component={Input} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            {props.error && <div className="form-group">{props.error}</div>}

            <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign in
            </button>
            <p className="forgot-password text-right">
                Unregistered
                <NavLink to={"/sign-up"}> Sign up ?</NavLink>
            </p>


            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}

const SignInFormRedux = reduxForm({ form: 'signIn' })(SignInForm)

const SignIn = (props) => {
    console.log(props)
    const onSubmit = (formData) => {
        console.log(formData)
        props.signIn(formData.email, formData.password)
    }
    // if (props.isAuth) {
    //     return <Redirect to={"/profile"} />
    // }
    return <SignInFormRedux onSubmit={onSubmit} />

}
const mapStateToProps = (state) => ({
    uid: state.firebase.auth.uid,

    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { signIn })(SignIn)