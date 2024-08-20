// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function UserIconOptions() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    async function logOutUser() {
        try {
            logout();
            navigate("/signin");
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return (
        <div className="absolute top-3/4 right-5 w-52 border p-3 bg-white rounded-lg shadow">
            <div>
                <ul className="flex flex-col">
                    <Link
                        to={"/userprofile"}
                        className="p-1 hover:bg-gray-100 cursor-pointer"
                    >
                        My Profile
                    </Link>
                    <Link
                        to={"/favorites"}
                        className="p-1 hover:bg-gray-100 cursor-pointer"
                    >
                        Favorites
                    </Link>
                    <hr className="border-2 my-1" />
                    <li
                        className="p-1 hover:bg-gray-100 cursor-pointer"
                        onClick={logOutUser}
                    >
                        <div>
                            <div className="flex items-center gap-3">
                                <span>Log out</span>
                                <IoLogOutOutline size={20} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserIconOptions;
