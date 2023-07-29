import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";

import { ToggleDarkMode } from "../../Buttons"
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Fas from "@fortawesome/free-solid-svg-icons";
import * as Far from "@fortawesome/free-regular-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { NavLink, useLocation} from 'react-router-dom';
import { NavLinkProps, itemSide } from "../../Dtos/sidebar.dto";

export const Navbar = () => {
  return (
    <>
      <div className=" text-neutral-900  dark:text-white flex justify-between items-center px-4 h-14">
        {/*TITLE*/}
        <div className="bg-slate-400 dark:bg-stone-900 w-1/3 h-[35px] flex justify-between items-center overflow-hidden border rounded-full border-slate-500">
          <FontAwesomeIcon className="p-3 text-xs text-slate-300" icon={Fas.faSearch}/>
          <input 
            className="flex-1 px-2 bg-slate-400 dark:bg-stone-900 dark:text-slate-400 h-full focus:ring-0 dark:focus:border-zinc-300" 
            placeholder="Pesquise cursos e aulas ..."/>
        </div>
        {/*ACTIONS*/}
        <div className="flex justify-center items-center">
          <div className="text-gray-900 dark:text-gray-300 opacity-50 text-xl p-2 hover:opacity-100 cursor-pointer mx-2">
            <FontAwesomeIcon icon={Far.faBell}/>
          </div>
          <ToggleDarkMode/>
          <div className="group opacity-50 text-xl p-2 hover:opacity-100 cursor-pointer mx-2 flex justify-center items-center">
            <FontAwesomeIcon className="text-gray-900 dark:text-gray-300 block group-hover:hidden" icon={Fas.faDoorClosed}/>
            <FontAwesomeIcon className="text-red-800 dark:text-gray-300 hidden group-hover:block" icon={Fas.faDoorOpen}/>
            <p className="mx-2 text-sm group-hover:text-red-500">Sair</p>
          </div>
          {/*PROFILE*/}          
          
        </div>  
      </div>      
    </>
  )
}


const NavItem : React.FC<NavLinkProps>  = (props) => {
  const nav = "flex px-2 py-1 hover:bg-slate-100 dark:hover:bg-neutral-900 mx-1 justify-center items-center font-semibold text-sm opacity-60 hover:opacity-100 ease-in duration-150"
  const navActive = "flex px-2 py-1 mx-2 justify-center items-center font-semibold text-sm border-b-4  border-b-green-600 dark:border-b-green-300 border-b-4 opacity-100"
  return(
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) =>isActive ? navActive : isPending ? nav : nav}>
      {props.icon ? (<FontAwesomeIcon className="mr-2 opacity-60 " icon={Fas[props.icon] as IconProp}/>) : false}
      {props.name ? (<p>{props.name}</p>) : false}      
    </NavLink>
  )
}