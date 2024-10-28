import React, { useState } from 'react';
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate(); // Access the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Reset error state
    setError(null);
    
    // Vérification des champs
    if (!name || !prenom ||  !email || !dateNaissance || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    
    // Vérification du format de l'email (ajoutez votre propre validation ici si nécessaire)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    
    // Vérification de la longueur du mot de passe (ajoutez votre propre validation ici si nécessaire)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:7777/ms-profile/patients', {
        nom: name,
        prenom,
        email,
        dateNaissance,
        password,
        role: 'patient'
        
      });

      console.log('Success:', response.data);
      navigate('/login');
      // Vous pouvez effectuer des actions supplémentaires après la réussite de la requête, telles que rediriger l'utilisateur vers une autre page.
    } catch (error) {
      console.error('Error:', error);
      // Vous pouvez gérer les erreurs ici, par exemple, afficher un message à l'utilisateur.
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg" style={{ marginRight: "50px" }}>
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg:pl-16 py-10 m-l-16">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an<span className="text-primaryColor p-l-4"> account</span>
            </h3>
            <form onSubmit={handleSignup}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='p-3 w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className='p-3 w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={dateNaissance}
                  onChange={(e) => setDateNaissance(e.target.value)}
                  className='p-3 w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 w-full pr-4 py-3 border-solid border-[#0066ff61] border-2 focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md'
                  required
                />
              </div>
              {error && <div className="mb-5 text-red-500">{error}</div>}
              
              <div className="mt-7">
                <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Signup</button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to='/login' className="text-primaryColor front-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;