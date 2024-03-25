import listOfIndustryExperiences from "@datautils/industry_experiences";
import React from "react";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

class HomepageViewModel {
  noOfVDividersInIndustryExp: Record<string, number> = {
    base: 1,
    lg: 2,
  };

  noOfColInIndustryExp: Record<string, number> = {
    base: this.noOfVDividersInIndustryExp.base + 1,
    lg: this.noOfVDividersInIndustryExp.lg + 1,
  };

  // Each cell in a Row
  noOfCellsInEachRowInIndustryExp: { [key: string]: number } = {
    base: 2,
    lg: 3,
  };

  noOfRowsInIndustryExp: Record<string, number> = {
    base: Math.round(
      listOfIndustryExperiences.length /
        this.noOfCellsInEachRowInIndustryExp.base
    ),
    lg: Math.round(
      listOfIndustryExperiences.length / this.noOfCellsInEachRowInIndustryExp.lg
    ),
  };

  // The Reference Object for the Engineering Services Section
  private _engineeringServicesRefObj: React.RefObject<HTMLDivElement> =
    React.createRef();

  // Getter for the Engineering Services Reference Object
  get engineeringServicesRefObj(): React.RefObject<HTMLDivElement> {
    return this._engineeringServicesRefObj;
  }

  // Setter for the Engineering Services Reference Object
  setEngineeringServicesRefObj(ref: React.RefObject<HTMLDivElement>): void {
    this._engineeringServicesRefObj = ref;
  }

  private _currentProjectIndexOnWorkPage: number = 0;

  get currentProjectIndexOnWorkPage(): number {
    return this._currentProjectIndexOnWorkPage;
  }

  setCurrentProjectIndexOnWorkPage(index: number): void {
    this._currentProjectIndexOnWorkPage = index;
  }

  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }

  // Get local time in 12-hour format e.g. "12:00 AM IST"
  getLocalTime(): string {
    const date = new Date();

    // Get hours, minutes, and seconds
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12; // Convert midnight (0 hours) to 12

    // Get timezone abbreviation
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Format time as "hh:mm AM/PM TIMEZONE"
    const formattedTime = `${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return formattedTime;
  }
}

export default HomepageViewModel;
