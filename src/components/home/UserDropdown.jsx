import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"



const UserDropdown = () => {
    const { user, logOut } = useAuth()
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button"><div className="avatar">
                <div className=" w-10 rounded-full ">
                    <img src={`${user?.photoURL || "/user.png"}`} />
                    {/* <img src={`${user?.photoURL || "../../assets/user.png"}`} /> */}
                </div>
            </div></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <Link to='/dashboard/overview'>Dashboard</Link>
                </li>
                <li >
                    <button onClick={handleLogout}>Logout

                    </button>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown