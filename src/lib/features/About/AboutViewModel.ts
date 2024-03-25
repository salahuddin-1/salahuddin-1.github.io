import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

class AboutViewModel {
  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }
}

export default AboutViewModel;
