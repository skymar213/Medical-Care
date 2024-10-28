import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [userPosition, setUserPosition] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
          userinfo.location = { latitude, longitude };
          localStorage.setItem('userinfo', JSON.stringify(userinfo));
          setUserPosition({ latitude, longitude });
          console.log('User position:', { latitude, longitude });
        },
        (error) => {
          console.error('Error retrieving user position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);  // Reset error state

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const loginUser = async (url) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`Login error ${response.status}`);
        }

        const userinfo = await response.json();
        console.log('userinfo :', userinfo);
        login();
        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        localStorage.setItem('isLoggedIn', 'true'); // Add this line
        

        // Navigate based on user role
        if (userinfo.role === 'patient') {
          navigate('/home');
        } else if (userinfo.role === 'medecin') {
          navigate('/dashboard');
        }
      } catch (e) {
        if (e.message.includes('401')) {
          setError('Incorrect credentials.');
        } else {
          setError(`Connection error: ${e.message}`);
        }
      }
    };

    await loginUser(`http://localhost:7777/ms-profile/loginPatient?email=${email}&password=${password}`);
    await loginUser(`http://localhost:7777/ms-profile/loginMedecin?email=${email}&password=${password}`);
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
          Hello! <span className='text-primaryColor'>Welcome</span> Back
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 w-full py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
              required
            />
            {error && error.includes('email') && <div className="text-red-500">{error}</div>}
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-3 w-full py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
              required
            />
            {error && error.includes('Password') && <div className="text-red-500">{error}</div>}
          </div>
          {error && !error.includes('email') && !error.includes('Password') && <div className="mb-5 text-red-500">{error}</div>}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to='/register' className="text-primaryColor front-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
