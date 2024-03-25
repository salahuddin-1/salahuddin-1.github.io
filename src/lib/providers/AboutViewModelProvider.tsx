import React, { createContext, useContext } from "react";
import AboutViewModel from "../features/About/AboutViewModel";

interface AboutViewModelContextProps {
  viewModel: AboutViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<AboutViewModelContextProps | undefined>(
  undefined
);

export const AboutViewModelProvider: React.FC<AboutViewModelContextProps> = ({
  viewModel,
  children,
}) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useAboutViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useAboutViewModel must be used within a AboutViewModelProvider"
    );
  }

  return context.viewModel;
};
