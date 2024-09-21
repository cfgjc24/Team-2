import React, { useState } from "react";
import { TextField, FormLabel, Button } from "@mui/material";
import { auth, firestore } from "./../Firebase"; // Make sure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
<<<<<<< HEAD
import { redirect, useNavigate, Navigate } from "react-router-dom"; // Import useNavigate
import "../index.css";
import RoleDropDown from '../components/RoleDropdown'
import SchoolDropDown from '../components/SchoolDropdown'
=======
import "../index.css";
>>>>>>> 60c5104 (feat: firebase auth and storage setup)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [school, setSchool] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

<<<<<<< HEAD
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

>>>>>>> 60c5104 (feat: firebase auth and storage setup)
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
<<<<<<< HEAD

        if (role === "Admin" && user) {
          navigate("/admin");
        }
=======
>>>>>>> 60c5104 (feat: firebase auth and storage setup)
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Sign in successful", userCredential.user);
<<<<<<< HEAD

        // If it's a sign in and role is admin, navigate to /admin
        if (role === "Admin") {
          navigate("/admin");
        }
      }
      console.log("Authentication successful");
=======
      }
      console.log("Authentication successful");
      // Redirect or update state as needed after successful authentication
>>>>>>> 60c5104 (feat: firebase auth and storage setup)
    } catch (error) {
      console.error("Authentication error:", error);
      setError(`${error.code}: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <h1>Welcome! </h1>
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
<<<<<<< HEAD
              <RoleDropDown setRole={setRole} />
            </div>
            <div className="form-group">
              <FormLabel className="label">School: </FormLabel>
              <SchoolDropDown setSchool={setSchool} />
=======
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
>>>>>>> 60c5104 (feat: firebase auth and storage setup)
            </div>
          </>
        )}
        {error && <p className="error">{error}</p>}
<<<<<<< HEAD
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginTop: '20px',
            '&:hover': {
              backgroundColor: 'lightblue',
              color: 'white',
            }
          }}
        >
          {isSignUp ? "Sign Up" : "Login"}
        </Button>

      </form>
      <Button
        onClick={() => setIsSignUp(!isSignUp)}
        variant="outlined"
        size="small"
        sx={{
          maxWidth: '200px',
          marginTop: '20px',
          '&:hover': {
            backgroundColor: 'lightblue',
            color: 'white'
          }
        }}
      >
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </Button>

=======
        <Button type="submit" variant="contained" color="primary">
          {isSignUp ? "Sign Up" : "Login"}
        </Button>
      </form>
      <Button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </Button>
>>>>>>> 60c5104 (feat: firebase auth and storage setup)
    </div>
  );
}
