import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Register.css";

// Images
import kiwifyLogo from "../../Images/kiwify-green-logo.png";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={kiwifyLogo} alt="Kiwify" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              entrar na sua conta existente
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                E-mail
              </label>
              <div>
                <input
                  type="text"
                  autocomplete="off"
                  name="null"
                  style={{
                    transitionProperty:
                      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                  }}
                  className="form-input block py-2 px-3 border border-gray-300 rounded-md focus:shadow-outline-blue focus:border-blue-300 duration-150 ease-in-out sm:text-sm sm:leading-5 w-full focus:outline-blue-300 focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] focus-visible:outline-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                Repetir e-mail
              </label>
              <div>
                <input
                  type="email"
                  autocomplete="off"
                  name="null"
                  style={{
                    transitionProperty:
                      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                  }}
                  className="form-input block py-2 px-3 border border-gray-300 rounded-md focus:shadow-outline-blue focus:border-blue-300 duration-150 ease-in-out sm:text-sm sm:leading-5 w-full focus:outline-blue-300 focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] focus-visible:outline-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Senha
              </label>
              <div>
                <input
                  type="password"
                  autocomplete="off"
                  name="null"
                  style={{
                    transitionProperty:
                      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
                  }}
                  className="form-input block py-2 px-3 border border-gray-300 rounded-md focus:shadow-outline-blue focus:border-blue-300 duration-150 ease-in-out sm:text-sm sm:leading-5 w-full focus:outline-blue-300 focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] focus-visible:outline-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  />
                </div>
                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os{" "}
                    <Link
                      to={{
                        pathname: "//kiwify.com.br/termos-de-uso",
                      }}
                      target="_blank"
                      className="underline"
                    >
                      termos de uso
                    </Link>
                    ,{" "}
                    <Link
                      to={{
                        pathname: "//kiwify.com.br/licenca-de-uso-software",
                      }}
                      target="_blank"
                      className="underline"
                    >
                      termos de licença de uso de software
                    </Link>
                    ,{" "}
                    <Link
                      to={{
                        pathname: "//kiwify.com.br/politica-de-conteudo",
                      }}
                      target="_blank"
                      className="underline"
                    >
                      política de conteúdo
                    </Link>{" "}
                    da Kiwify
                  </span>
                </div>
              </label>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Criar conta
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
