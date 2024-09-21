import React, { useState } from "react";
import { TextField, FormLabel, Button } from "@mui/material";
import { auth, firestore } from "./../Firebase"; // Make sure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [school, setSchool] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Store additional user info in Firestore
        try {
          const userDocRef = doc(firestore, "users", user.uid);
          await setDoc(userDocRef, {
            email: user.email,
            role: role,
            school: school,
            createdAt: new Date(),
          });
          console.log("User data stored in Firestore");
        } catch (firestoreError) {
          console.error("Error storing user data:", firestoreError);
          setError(
            "Account created, but there was an error saving additional info. Please try updating your profile later."
          );
        }

        console.log("Sign up successful", user);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Sign in successful", userCredential.user);
      }
      console.log("Authentication successful");
      // Redirect or update state as needed after successful authentication
    } catch (error) {
      console.error("Authentication error:", error);
      setError(`${error.code}: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FormLabel className="label">Email: </FormLabel>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <FormLabel className="label">Password: </FormLabel>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        {isSignUp && (
          <>
            <div className="form-group">
              <FormLabel className="label">Role: </FormLabel>
              <TextField
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <FormLabel className="label">School: </FormLabel>
              <TextField
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
              />
            </div>
          </>
        )}
        {error && <p className="error">{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          {isSignUp ? "Sign Up" : "Login"}
        </Button>
      </form>
      <Button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </Button>
    </div>
  );
}
