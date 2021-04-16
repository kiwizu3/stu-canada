import React from 'react'

export const Login = () => (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center my-3">STUDENT LOGIN</h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-sm-12">
                    <div className="card">
                        <article className="card-body">
                            <a href="" className="float-right btn btn-outline-primary">Sign up</a>
                            <h4 className="card-title mb-4 mt-1">Sign in</h4>
                            <p>
                                <a href="" className="btn btn-block btn-outline-info"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
                                <a href="" className="btn btn-block btn-outline-primary"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
                            </p>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <input name="" className="form-control" placeholder="Email or login" type="email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="******" type="password" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <a className="small" href="#">Forgot password?</a>
                                    </div>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
