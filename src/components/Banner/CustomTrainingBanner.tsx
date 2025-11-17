import BaseBanner from "./BaseBanner";
import customBannerImg from "../../assets/customTraining.jpg"; // <-- your image

export default function CustomTrainingBanner() {
  return (
    <BaseBanner
      title="Custom Training Programs"
      description="Training tailored to your organization’s needs."
      image={customBannerImg}
    />
  );
}
