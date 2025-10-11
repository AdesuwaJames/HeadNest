// src/Components/Pages/auth/GoogleCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Parse the token from the URL query params
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/welcome"); // or dashboard
    } else {
      navigate("/signin"); // fallback if something goes wrong
    }
  }, [navigate]);

  return <p>Signing you in with Google...</p>;
};

export default GoogleCallback;
