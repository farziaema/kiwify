import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

// CSS
import "./ResetPassword";

// Images
import kiwifyLogo from "../../Images/kiwify-green-logo.png";
import auth from "../../firebase.init";

const ResetPassword = () => {
  const [status, setStatus] = useState(false);
  // React Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Firebase
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // Reset Password
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email).then((res) => setStatus(res));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={kiwifyLogo} alt="Logo" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Redefinir a senha
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Você receberá um e-mail com instruções para redefinir a senha
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {!status && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                  >
                    E-mail
                  </label>
                  <div>
                    <input
                      type="text"
                      autoComplete="username"
                      name="null"
                      className={`form-input block py-2 px-3 border rounded-md focus:shadow-outline-blue focus:border-blue-300 duration-150 ease-in-out sm:text-sm sm:leading-5 w-full focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] focus-visible:outline-none ${
                        errors["email"] ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Esse campo é obrigatório",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "O e-mail deve ser válido",
                        },
                      })}
                    />
                    {(errors.email?.type === "required" || "pattern") && (
                      <div className="text-xs text-red-500 mt-1">
                        {errors.email?.message}
                      </div>
                    )}
                  </div>
                </div>
                {error && (
                  <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          className="text-red-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm leading-5 text-red-700">
                          {error.message.split("(")[1].split(")")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Redefinir senha
                    </button>
                  </span>
                </div>
              </form>
            )}
            {status && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-32 text-[rgb(49,196,141)] mx-auto block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <h3 className="mt-4 text-center text-2xl font-medium">
                  E-mail enviado! Verifique a sua caixa de entrada
                </h3>
                <p className="mt-4 text-center"></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
