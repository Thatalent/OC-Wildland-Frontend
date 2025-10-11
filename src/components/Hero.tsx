import { FC, useEffect, useState } from "react";
import { request, gql } from "graphql-request";

interface HeroProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonClick?: () => void;
  secondaryButtonClick?: () => void;
}

const endpoint = "http://localhost:3000/api/";

const HERO_QUERY = gql`
  query GetHero {
    heroes {
      id
      title1
      title2
      subtitle
      backgroundImage
      primaryButtonText
      secondaryButtonText
    }
  }
`;

const defaultHeroData: HeroProps = {
  title1: "Become a",
  title2: "Wildfire Hero",
  subtitle:
    "Join the next generation of wildfire fighters. Get professional training in wildfire suppression and emergency CPR to protect your community and save lives.",
  backgroundImage: "none",
  primaryButtonText: "Start Training Now",
  secondaryButtonText: "Learn More",
};

const Hero: FC = () => {
  const [heroData, setHeroData] = useState<HeroProps | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await request(endpoint, HERO_QUERY);
        const hero = res.heroes?.[0] ?? null;
        setHeroData(hero);
      } catch (err) {
        console.error("Error fetching hero data:", err);
        setHeroData(null);
      }
    };

    fetchHero();
  }, []);

  const mergedData: HeroProps = {
    ...defaultHeroData,
    ...(heroData ?? {}),
  };

  return (
    <div
      style={{
        backgroundImage: mergedData.backgroundImage
          ? `url(${mergedData.backgroundImage})`
          : "none",
        height: "900px",
        maxHeight: "900px",
        width: "100dvw",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: "lightgray",
      }}
    >
      <div
        className="hero__inner-div"
        style={{
          marginTop: "203px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "704px",
          height: "364px",
          backgroundColor: "transparent",
          borderRadius: "8px",
          gap: "24px",
        }}
      >
        <p
          className="
    flex flex-col items-center
    text-[45px] leading-[48px] font-bold text-white
    sm:text-[76px] sm:leading-[84px]
    m-0 p-0
  "
        >
          {mergedData.title1}
          <span
            className="
      text-center
      text-[45px] leading-[48px] font-bold
      sm:text-[76px] sm:leading-[84px]
      bg-gradient-to-r from-[#EE2B2B] via-[#F34E1B] to-[#F8C630]
      bg-clip-text text-transparent
    "
          >
            {mergedData.title2}
          </span>
        </p>

        <p
          className="
    flex flex-col items-center
    text-[18.8px] leading-[28px]
     sm:text-[20px] sm:leading-[28px]
     px-[20px] sm:px-[50px]

    "
          style={{
            padding: "0",
            margin: "0",
            color: "#FFFFFF",
            maxWidth: "672px",
            textAlign: "center",
            height: "fit-content",
          }}
        >
          {mergedData.subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            padding: "16px",
          }}
        >
          <div className="w-full sm:w-fit" style={{}}>
            <button
              className="transition-transform duration-200 hover:scale-105 w-full sm:w-fit"
              style={{
                background: "linear-gradient(90deg, #EE2B2B, #F34E1B, #F8C630)",
                borderRadius: "8px",
                padding: "16px 40px",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "15.5px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => { }}
            >
              {mergedData.primaryButtonText}
            </button>
          </div>

          <div className="w-full sm:w-fit" style={{}}>
            <button
              className="transition-transform duration-200 hover:scale-105 w-full sm:w-fit"
              style={{
                padding: "16px 41px",
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: "15.5px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => { }}
            >
              {mergedData.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
