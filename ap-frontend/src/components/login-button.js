import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css"; 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{border: "none", backgroundColor: "rgb(248, 220, 246)"}}><img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476214/user_pjvppm.png" onClick={() => loginWithRedirect()} style={{width:"25px"}}/></button>;
};

export default LoginButton;
