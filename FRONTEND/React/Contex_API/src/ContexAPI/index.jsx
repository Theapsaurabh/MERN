import { createContext, useContext } from "react"; 

// Step 1: Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

// Step 2: Create the provider
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// Step 3: Create the custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useBioContext = () => {
  const context = useContext(BioContext); // ✅ useContext, not use
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
