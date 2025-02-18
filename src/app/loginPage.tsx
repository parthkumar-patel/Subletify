"use client";
import { useState } from "react";
import { account, ID } from "./appwrite";

const LoginPage: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<{ name: string } | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const login = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      await login(email, password);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loggedInUser ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <p className="text-lg font-semibold">Logged in as {loggedInUser.name}</p>
          <button
            type="button"
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <p className="text-lg font-semibold text-center">Not logged in</p>
          <form className="flex flex-col gap-4 mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => login(email, password)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={register}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
