import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientDetails, setPatientDetails] = useState({});
  const [address, setAddress] = useState({});
  const [profile, setProfile] = useState({});

  return (
    <Context.Provider
      value={{
        userEmail,
        setUserEmail,
        patientId,
        setPatientId,
        patientDetails,
        setPatientDetails,
        address,
        setAddress,
        profile,
        setProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};
