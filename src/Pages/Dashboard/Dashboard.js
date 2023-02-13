import React from "react";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// CSS
import "./Dashboard.css";

// Images
import kiwifyLogo from "../../Images/kiwify-green-logo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  // Sign Out
  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="px-7 sm:px-0 min-h-screen bg-gray-50 flex flex-col justify-center py-12">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={kiwifyLogo} alt="Logo" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Bem-vindo ao Painel!
          </h2>
        </div>
        <div className="mt-12">
          <span className="flex justify-center">
            <button
              onClick={handleSignOut}
              className="w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sair
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
