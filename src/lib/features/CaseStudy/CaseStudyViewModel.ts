import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";
import workStack, { CaseStudyProp } from "@datautils/case_studies";
import { CaseStudyNavParams } from "./CaseStudy";

class CaseStudyViewModel {
  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }

  // The navigation parameters for the case study
  private caseStudyNavParams!: CaseStudyNavParams;

  get getCaseStudyNavParams(): CaseStudyNavParams {
    return this.caseStudyNavParams;
  }

  setCaseStudyNavParams(caseStudyNavParams: CaseStudyNavParams): void {
    this.caseStudyNavParams = caseStudyNavParams;
  }

  // Get the project details from the case studies data by matching the slug
  getCaseStudyDetails(): CaseStudyProp | undefined {
    let caseStudyProp: CaseStudyProp | undefined;

    workStack.find((value) => {
      if (value.slug === this.caseStudyNavParams.slug) {
        caseStudyProp = value;
      }
    });

    return caseStudyProp;
  }
}

export default CaseStudyViewModel;
