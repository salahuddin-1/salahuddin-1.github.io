import React, { createContext, useContext } from "react";
import CaseStudyViewModel from "../features/CaseStudy/CaseStudyViewModel";

interface CaseStudyViewModelContextProps {
  viewModel: CaseStudyViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  CaseStudyViewModelContextProps | undefined
>(undefined);

export const CaseStudyViewModelProvider: React.FC<
  CaseStudyViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useCaseStudyViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useCaseStudyViewModel must be used within a CaseStudyViewModelProvider"
    );
  }

  return context.viewModel;
};
