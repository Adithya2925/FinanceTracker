import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log("Raw response:", credentialResponse);

    // Decode JWT token
    const userInfo = jwtDecode(credentialResponse.credential);
    console.log("Decoded User Info:", userInfo);

    // Pass user data while redirecting
    navigate("/home", { state: { user: userInfo } });
  };

  return (
    <div>
      <h1>Google Login Example</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </div>
  );
};

export default Login;
