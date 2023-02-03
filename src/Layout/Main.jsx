import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Main.css';
import Header from '../Compontes/Header/Header';
import { FaUserFriends } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';
import { GrLogin } from 'react-icons/gr';
import { FaUserEdit } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { ContextStudent } from '../ContextProvider/ContextProvider';

const Main = () => {
    const { userLogout, user } = useContext(ContextStudent);
    const navigate = useNavigate();

    const logout = () => {
        userLogout()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <Header></Header>
            <div className='mt-36'>
                <div className='flex justify-between items-center w-[80%] ml-auto mb-5 font-bold'>
                    <h2>Manage Students</h2>
                    <span>26 Jan 2023 16:32</span>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[18%]'>
                        <ul>
                            {
                                !user &&
                                <>
                                    <li className='font-bold text-[21px]'><NavLink className={`flex items-center p-2 rounded-md ({ isActive }) => isActive ? 'active' : undefined`} to='/register'><span><FaUserEdit className='mr-1' size={20} /></span>Register</NavLink></li>

                                    <li className='font-bold text-[21px]'><NavLink className={`flex items-center p-2 rounded-md ({ isActive }) => isActive ? 'active' : undefined`} to='/'><span><GrLogin className='mr-1' size={20} /></span>Login</NavLink></li>
                                </>
                            }

                            {
                                user &&
                                <>
                                    <li className='font-bold text-[21px]'><NavLink className={`flex items-center p-2 rounded-md ({ isActive }) => isActive ? 'active' : undefined`} to='/addstudent'><span><FaUserFriends className='mr-1' size={20} /></span>Add Student</NavLink></li>

                                    <li className='font-bold text-[21px]'><NavLink className={`flex items-center p-2 rounded-md ({ isActive }) => isActive ? 'active' : undefined`} to='/managestudent'><span><MdManageAccounts className='mr-1' size={20} /></span>Manage Student</NavLink></li>

                                    <li className='font-bold text-[21px] -2'>
                                        <button onClick={() => logout()} className='flex items-center'>
                                            <span><BiLogOut className='mr-1' size={20} /></span>Log Out
                                        </button>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className='w-[80%]'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;