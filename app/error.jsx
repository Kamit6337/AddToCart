"use client";

import React from "react";

const MainError = ({ error }) => {
  return (
    <div>
      <p>Main Error</p>
      <p>{error.message}</p>
    </div>
  );
};

export default MainError;
