/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#000000] w-screen h-screen justify-center items-center">
      
      <div className="flex flex-col  bg-[#F7FAFC] w-[414px] h-[736px] justify-center items-center">
        <div className="flex w-full flex-col h-[90vh] p-[10%] justify-left items-left">
        <span className="flex w-[150px]  text-[16px] font1">Bem vindo de volta</span>
        <span className="flex w-[302px] text-[26px] font1">Faça login na sua conta</span>
           </div>
      <div className="flex flex-col w-[350px]  justify-center items-left mt-10">
        <span className="flex w-[] text-[16px]  md-2">E-mail</span>
        <input type="text" className="px-2 py-2 border-2"></input>
      </div>
      <div className="flex flex-col w-[350px]  justify-center items-left  mt-10">
        <span className="flex w-[] text-[16px] md-2">Senha</span>
        <input type="password" className="px-2 py-2 border-2 border-[#E8E8E8]"></input>
      </div>
      <div className="flex flex-row  w-[350px]  justify-center items-left mt-10">
      <input type="radio" className="px-2 py-6 md-2"></input>
        <span className="flex w-[] text-[14px] px-2 py-6 md-2">Lembre de mim</span>
        <a href="#" className="flex hover:text-gray-800 hover:underline text-[14px] px-12 py-6 text-blue-600 md-2 items-right">Esqueceu a Senha?</a>
      </div>
      <div className="flex flex-row grid grid-cols-1 gap-10 w-[350px] h-36 justify-center text-center">
        <buttom type="subimit" className="grid hover:grid-cols-1 font-bold hover:font-bold hover:bg-green-300 col-span-3 p-2  px-5 py-3 font2 text-[16px] text-[#FFFFFF] bg-[#04C35C] rounded-md">Entrar</buttom>
        <buttom type="submit" className="flex flex-row w-[350px] px-2 py-3 justify-center rounded-md bg-[#1A202C] text-white font2 text-[16px] font-bold hover:bg-[#1A202C]/80">
          <img src="./src/assets/google.png" alt="Login com sua conta Google" className="flex" />
          <span className="flex ml-4">
          Ou faça login com o Google
          </span>
        </buttom>
      </div>
      <div className="flex flex-row  w-[350px]  justify-center items-left mt-10">
        <span className="flex w-[] text-[16px] px-2 py-4 md-2">Não tem uma conta?</span>
        <a href="#" className="flex hover:text-gray-800 hover:font-bold text-[16px] px-2 py-4 text-blue-600 md-2 items-right">Cadastre-se</a>
      </div>
      </div>
    </div>
  );
}
