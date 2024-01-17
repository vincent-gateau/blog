import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoundersSection = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('../Admin');
  };

  return (
    <div className="text-center mt-10 mb-16">
      <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={handleNavigation}>
        Qui Sommes-Nous ?
      </h2>
      <div className="flex justify-center items-center">
        <div className="avatar mx-4">
          <div className="w-24 h-24 rounded-full">
            <img
              src={`${process.env.PUBLIC_URL}/assets/shanks.png`}
              alt="Vin's"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Vincent Gateau</p>
        </div>
        <div className="avatar mx-4">
          <div className="w-24 h-24 rounded-full">
            <img
              src={`${process.env.PUBLIC_URL}/assets/avatar.png`}
              alt="Kany"
            />
          </div>
          <p className="mt-2 text-sm font-medium">Kanyka Chheng</p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
