import React from 'react';
import Layout from '../components/layout/Layout';

const SignIn = () => {

    document.body.classList.add('bg-dark');

    return ( 
        <>
        <Layout>
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                                <img className="align-content" src="/static/images/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                    <label className="pull-right">
                                        <a href="#">Forgotten Password?</a>
                                    </label>

                                </div>
                                <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                <div className="social-login-content">
                                    <div className="social-button">
                                        <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook"></i>Sign in with facebook</button>
                                        <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter"></i>Sign in with twitter</button>
                                    </div>
                                </div>
                                <div className="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    body { 
                        background-color:red;
                    }
                    `}</style>
            </div>
        </Layout>
        </>
     );
}
 
export default SignIn;