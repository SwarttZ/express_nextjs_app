"use client"

import React, { useEffect } from "react";
import Home from "./home";

function ClientOnlyApp() {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
    }
  }, []);

  return <Home />
}

export default ClientOnlyApp;
