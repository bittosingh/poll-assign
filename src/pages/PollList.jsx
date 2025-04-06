import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice'

const PollList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-red-300 mb-4">Poll List</h1>
      <button
        onClick={handleBackClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Log out
      </button>
    </div>
  );
};

export default PollList;