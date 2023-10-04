import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');   
        const photo = form.get('photo');   
        const email = form.get('email');   
        const password = form.get('password');   
        createUser(email, password)
        .then(result => console.log(result.user))
        .then(error => console.log(error))
    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h3 className="text-3xl font-bold text-center">Register your account</h3>
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already Have An Account ? <Link to='/login' className="text-blue-400">Login</Link></p>
      </div>
    </div>
  );
};
export default Register;