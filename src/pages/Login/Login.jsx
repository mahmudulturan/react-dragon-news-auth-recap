import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');   
        const password = form.get('password');   
        loginUser(email,password)
        .then(result => {
          console.log(result.user)
          navigate(location?.state? location.state : '/')
        })
        .then(error => console.log(error))
    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h3 className="text-3xl font-bold text-center">Login your account</h3>
        <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">Dont’t Have An Account ? <Link to='/register' className="text-blue-400">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
