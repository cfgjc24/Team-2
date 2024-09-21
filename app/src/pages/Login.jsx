import React, { useState } from "react";
import { TextField, FormLabel, Button } from "@mui/material";
import { auth, firestore } from "./../Firebase"; // Make sure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { redirect, useNavigate, Navigate } from "react-router-dom"; // Import useNavigate
import "../index.css";
import RoleDropDown from '../components/RoleDropdown'
import SchoolDropDown from '../components/SchoolDropdown'
import { collection, query, where, getDocs } from "firebase/firestore"; // Import necessary Firestore methods

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [school, setSchool] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

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

        if (role === "Admin") {
          navigate("/admin");
        }
        else if (role === "Student") {
          navigate("/Student")
        }
      } else {
        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("Sign in successful", user);

        // Fetch the role from Firestore for the signed-in user based on email
        const q = query(collection(firestore, "users"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            const userRole = userData.role;

            // Check if the role is 'Admin' and navigate
            if (userRole === "Admin") {
              navigate("/Admin");
            } else if (userRole === "Student") {
              console.log(userRole);
              navigate("/student");
            }
          });
        } else {
          console.error("No such document for the user!");
        }
      }
      console.log("Authentication successful");
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
              <RoleDropDown setRole={setRole} />
            </div>
            <div className="form-group">
              <FormLabel className="label">School: </FormLabel>
              <SchoolDropDown setSchool={setSchool} />
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
