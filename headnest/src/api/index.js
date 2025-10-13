import { API_BASE_URL } from "./config";


//Login
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/user/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
if (!response.ok) {
  const errorData = await response.json();
  console.log(errorData);
  throw new Error(errorData.message || "Login failed");
}
  return response.json();
};



// ✅ Google Signup/Login Redirect
export const googleAuthRedirect = () => {
  window.location.href = `${API_BASE_URL}/google`;
};

// ✅ Validate anonymous name
export const validateAnonymousName = async (anonymousName) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/user/auth/anonymous-name/validate
`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ anonymousName }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Invalid anonymous name");
  }
  return data;
};

// ✅ Set anonymous name
export const setAnonymousName = async (anonymousName) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE_URL}/user/auth/anonymous-name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ anonymousName }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to set anonymous name");
  }
  return data;
};


// 📝 Example: Fetch communities (GET)
export const fetchCommunities = async () => {
  const response = await fetch(`${API_BASE_URL}/communities`);
  if (!response.ok) {
    throw new Error("Failed to fetch communities");
  }
  return response.json();
};


