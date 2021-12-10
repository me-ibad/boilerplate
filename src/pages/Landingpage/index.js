import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/home')} className='text-red-600'>
        Example page
      </button>
      &nbsp;
      <button onClick={() => toast('Welcome!')}>Notify!</button>
    </div>
  );
}

export default LandingPage;
