"use client";

import { PulseLoader } from "react-spinners";

const loading = () => {
  return (
    <PulseLoader
      color="#4bc5af"
      loading
      margin={2}
      size={16}
      speedMultiplier={1.5}
    />
  );
};

export default loading;
