import { API_BASE_URL } from "./config";

// 📝 Example: Register a user
export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/user/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }
  return response.json();
};

// 📝 Example: Login
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/user/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
};

export const googleSignup = async (token) => {
  const response = await fetch(`${API_BASE_URL}/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Google signup failed");
  }
  return response.json();
};

// 📝 Example: Fetch communities (GET)
export const fetchCommunities = async () => {
  const response = await fetch(`${API_BASE_URL}/communities`);
  if (!response.ok) {
    throw new Error("Failed to fetch communities");
  }
  return response.json();
};
