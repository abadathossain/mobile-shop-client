import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin } = useAuth()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin().then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary w-full">   <FcGoogle />Google</button>
        </div>
    )
}

export default SocialLogin