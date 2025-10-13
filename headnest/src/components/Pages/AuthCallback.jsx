import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/welcome"); // or /dashboard, wherever you want them to land
    } else {
      navigate("/signup");
    }
  }, [navigate]);

  return <p className="text-center mt-10">Signing you in with Google...</p>;
}
