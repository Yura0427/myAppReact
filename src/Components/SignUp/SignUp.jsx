import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { signUp } from "../../Redux/auth-reducer";
import { emailError, required } from "../../Shared/Validators";
import { Input } from "../Common/FormsControl";

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <h3>Register</h3>
            <div className="form-group">
                <label>First name</label>
                <Field className="form-control"
                    name={'firstName'}
                    placeholder={'First name'}
                    component='input'
                    type={"text"} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <Field className="form-control"
                    name={'lastName'}
                    placeholder={'Last name'}
                    component='input'
                    type={"text"} />
            </div>

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
                    component={Input}
                    type={"password"} />
            </div>
            {props.error && <div className="form-group">{props.error}</div>}

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered
                <NavLink to={"/sign-in"}>Sign in?</NavLink>
            </p>
        </form >
    );
}
const SignUpFormRedux = reduxForm({ form: 'signUp', required })(SignUpForm)

const SignUp = (props) => {
    const onSubmit = (formData) => {
        console.log(formData,)
        props.signUp(formData.email, formData.password)
    }
    return <SignUpFormRedux onSubmit={onSubmit} />

}
const mapStateToProps = (state) => ({
    uid: state.firebase.auth.uid,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { signUp })(SignUp)