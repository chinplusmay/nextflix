import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO_IMG_URL } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
    
    .then({})
    .catch((error) => {
      navigate('/error');
    });
  };

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
          <img
            className="w-12"
            src={user?.photoURL}
            alt="avatar"
          />
          <button className='p-2 ml-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header