import React, { useState, useEffect } from "react";
import FinancialService from "../services/financial.service";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function Home() {
  
//<Financial financials={financials}/>
  return (
    <>
      <div className="container flex flex-row flex-wrap mx-auto items-center justify-center">
        <SignedOut>
          <h1 className="text-6xl font-bold mb-5 mt-5">Welcome to your own Personal</h1>
        </SignedOut>
        <SignedIn>
          <Navigate to="/dashboard"/>
        </SignedIn>
      </div>
    </>
  );
}
 export default Home;