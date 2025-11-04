import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {toggleGptSearch} from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO_IMG_URL, SUPPORTED_LANGUAGES, USER_IMG_URL } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
    
    .then({})
    .catch((error) => {
      navigate('/error');
    });
  };

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e) =>{
    // console.log(e.target.value) hn sp fr
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email, displayName, photoURL}))
        // console.log(user);
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // unsubscribe to the auth state changes when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute px-8 py-5 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>
        <img 
            className="w-48"
              src={LOGO_IMG_URL}
            alt="logo" 
        />
       {user && <div className='flex items-center'>
          <select name='languages' onChange={handleLanguageChange} className='text-black bg-white rounded-md p-2 text-lg '>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier} className='text-black bg-white rounded-md p-2 text-lg '>{lang.name}</option>)}
          </select>
          <button className='py-2 px-4 m-2 bg-white text-black rounded-md' onClick={() =>{
            handleGptSearch();
          }} >{showGptSearch ? 'Home' : 'Search'}</button>
          <img
            className="w-12 rounded-full"
            src={USER_IMG_URL ||user?.photoURL}
            alt="avatar"
          />
          <button className='p-2 ml-2 text-white bg-red-700 rounded-md' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header