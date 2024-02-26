"use client";
const error = ({ error }) => {
  return (
    <div>
      <p>Error from Main Layout</p>
      <p>{error.message}</p>
    </div>
  );
};

export default error;
