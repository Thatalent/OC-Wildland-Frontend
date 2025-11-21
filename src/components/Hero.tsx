import React, { CSSProperties, FC } from "react";
import { useNavigate } from "react-router-dom";

type HeroProps = {
  title1?: string;
  title2?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundImageAltText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonClick?: () => void;
  secondaryButtonClick?: () => void;
  styles?: {
    container?: CSSProperties;
    image?: CSSProperties;
    innerContainer?: CSSProperties;
    title1?: CSSProperties;
    title2?: CSSProperties;
    subtitle?: CSSProperties;
    button1?: CSSProperties;
    button2?: CSSProperties;
  };
};

const Hero: FC<HeroProps> = (props) => {
  const navigate = useNavigate();

  // Default content
  const defaultContent = {
    title1: "Become a",
    title2: "Wildfire Hero",
    subtitle:
      "Join the next generation of wildfire fighters. Get professional training in wildfire suppression and emergency CPR to protect your community and save lives.",
    backgroundImage: "none",
    backgroundImageAltText: "Hero Background Image",
    primaryButtonText: "Start Training Now",
    secondaryButtonText: "Learn More",
    primaryButtonClick: () => navigate("/training"),

    secondaryButtonClick: () => navigate("/about"),
  };

  // Default styles
  const defaultStyles: Record<string, CSSProperties> = {
    container: {
      zIndex: 1,
      height: "900px",
      maxHeight: "900px",
      width: "100dvw",
      // maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
      position: "relative",
      backgroundColor: "lightgray",
    },
    image: {
      zIndex: 2,
      height: "100%",
      maxHeight: "900px",
      width: "1440px",
      maxWidth: "1440px",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      backgroundColor: "lightgray",
      opacity: 1,
      objectFit: "cover",
    },
    innerContainer: {
      zIndex: 3,
      marginTop: "203px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "704px",
      height: "364px",
      backgroundColor: "transparent",
      borderRadius: "8px",
      gap: "24px",
    },
    title1: {
      margin: 0,
      padding: 0,
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "76px",
      lineHeight: "84px",
    },
    title2: {
      margin: 0,
      padding: 0,
      backgroundImage: "linear-gradient(90deg, #EE2B2B, #F34E1B, #F8C630)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "76px",
      lineHeight: "84px",
    },
    subtitle: {
      padding: "0 16px",
      margin: 0,
      color: "#FFFFFF",
      maxWidth: "672px",
      textAlign: "center",
      height: "fit-content",
      fontSize: "20px",
      lineHeight: "28px",
    },
    button1: {
      background: "linear-gradient(90deg, #EE2B2B, #F34E1B, #F8C630)",
      borderRadius: "8px",
      padding: "16px 40px",
      color: "#FFFFFF",
      border: "none",
      fontSize: "15.5px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    button2: {
      padding: "16px 41px",
      borderRadius: "8px",
      backgroundColor: "transparent",
      color: "#FFFFFF",
      fontSize: "15.5px",
      fontWeight: 600,
      cursor: "pointer",
      border: "1px solid rgba(35, 43, 58, 0.1)",
      transition: "transform 0.2s",
    },
  };

  // Merge props with defaults
  const merged = {
    title1: props.title1 ?? defaultContent.title1,
    title2: props.title2 ?? defaultContent.title2,
    subtitle: props.subtitle ?? defaultContent.subtitle,
    backgroundImage: props.backgroundImage ?? defaultContent.backgroundImage,
    backgroundImageAltText:
      props.backgroundImageAltText ?? defaultContent.backgroundImageAltText,
    primaryButtonText: props.primaryButtonText ?? defaultContent.primaryButtonText,
    secondaryButtonText: props.secondaryButtonText ?? defaultContent.secondaryButtonText,
    primaryButtonClick: props.primaryButtonClick ?? defaultContent.primaryButtonClick,
    secondaryButtonClick: props.secondaryButtonClick ?? defaultContent.secondaryButtonClick,
    styles: {
      container: { ...defaultStyles.container, ...(props.styles?.container || {}) },
      image: { ...defaultStyles.image, ...(props.styles?.image || {}) },
      innerContainer: { ...defaultStyles.innerContainer, ...(props.styles?.innerContainer || {}) },
      title1: { ...defaultStyles.title1, ...(props.styles?.title1 || {}) },
      title2: { ...defaultStyles.title2, ...(props.styles?.title2 || {}) },
      subtitle: { ...defaultStyles.subtitle, ...(props.styles?.subtitle || {}) },
      button1: { ...defaultStyles.button1, ...(props.styles?.button1 || {}) },
      button2: { ...defaultStyles.button2, ...(props.styles?.button2 || {}) },
    },
  };

  return (
    <div style={merged.styles.container}>
      <img
        src={merged.backgroundImage}
        alt={merged.backgroundImageAltText}
        style={merged.styles.image}
      />

      <div style={merged.styles.innerContainer}>
        <div style={{ padding: "0 16px" }}>
          <h1 style={merged.styles.title1}>{merged.title1}</h1>

          <h2 style={merged.styles.title2}>{merged.title2}</h2>
        </div>


        <p style={merged.styles.subtitle}>{merged.subtitle}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button style={merged.styles.button1} onClick={merged.primaryButtonClick}>
            {merged.primaryButtonText}
          </button>

          <button style={merged.styles.button2} onClick={merged.secondaryButtonClick}>
            {merged.secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import { FC } from "react";

// interface HeroProps {
//   title1?: string;
//   title2?: string;
//   subtitle?: string;
//   backgroundImage?: string;
//   backgroundImageAltText?: string;
//   primaryButtonText?: string;
//   secondaryButtonText?: string;
//   primaryButtonClick?: () => void;
//   secondaryButtonClick?: () => void;
// }

// const defaultHeroData: Required<HeroProps> = {
//   title1: "Become a",
//   title2: "Wildfire Hero",
//   subtitle:
//     "Join the next generation of wildfire fighters. Get professional training in wildfire suppression and emergency CPR to protect your community and save lives.",
//   backgroundImage: "none",
//   backgroundImageAltText: "Hero Background Image",
//   primaryButtonText: "Start Training Now",
//   secondaryButtonText: "Learn More",
//   primaryButtonClick: () => { },
//   secondaryButtonClick: () => { },
// };

// const Hero: FC<HeroProps> = (props) => {
//   // Merge props with defaults
//   const mergedData = { ...defaultHeroData, ...props };

//   return (
//     <div style={{
//       zIndex: 1,
//       height: "900px",
//       maxHeight: "900px",
//       width: "100dvw",
//       maxWidth: "1440px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifySelf: "center",
//       position: "relative",
//       backgroundColor: "lightgray",
//     }}>
//       <img
//         src={mergedData.backgroundImage}
//         alt={mergedData.backgroundImageAltText}
//         style={{
//           zIndex: 2,
//           height: "900px",
//           maxHeight: "900px",
//           width: "100dvw",
//           maxWidth: "1440px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           position: "absolute",
//           backgroundColor: "lightgray",
//         }}
//       />

//       <div
//         className="hero__inner-div"
//         style={{
//           zIndex: 3,
//           marginTop: "203px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           maxWidth: "704px",
//           height: "364px",
//           backgroundColor: "transparent",
//           borderRadius: "8px",
//           gap: "24px",
//         }}
//       >
//         {/* Title */}
//         <p
//           className="
//             flex flex-col items-center
//             text-[45px] leading-[48px] font-bold text-white
//             sm:text-[76px] sm:leading-[84px]
//             m-0 p-0
//           "
//         >
//           {mergedData.title1}

//           <span
//             className="
//               text-center
//               text-[45px] leading-[48px] font-bold
//               sm:text-[76px] sm:leading-[84px]
//               bg-gradient-to-r from-[#EE2B2B] via-[#F34E1B] to-[#F8C630]
//               bg-clip-text text-transparent
//             "
//           >
//             {mergedData.title2}
//           </span>
//         </p>

//         {/* Subtitle */}
//         <p
//           className="
//             flex flex-col items-center
//             text-[18.8px] leading-[28px]
//             sm:text-[20px] sm:leading-[28px]
//             px-[20px] sm:px-[50px]
//           "
//           style={{
//             padding: "0",
//             margin: "0",
//             color: "#FFFFFF",
//             maxWidth: "672px",
//             textAlign: "center",
//             height: "fit-content",
//           }}
//         >
//           {mergedData.subtitle}
//         </p>

//         {/* Buttons */}
//         <div
//           className="flex flex-col sm:flex-row"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "16px",
//             padding: "16px",
//           }}
//         >
//           <div className="w-full sm:w-fit">
//             <button
//               className="transition-transform duration-200 hover:scale-105 w-full sm:w-fit"
//               style={{
//                 background:
//                   "linear-gradient(90deg, #EE2B2B, #F34E1B, #F8C630)",
//                 borderRadius: "8px",
//                 padding: "16px 40px",
//                 color: "#FFFFFF",
//                 border: "none",
//                 fontSize: "15.5px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//               }}
//               onClick={mergedData.primaryButtonClick}
//             >
//               {mergedData.primaryButtonText}
//             </button>
//           </div>

//           <div className="w-full sm:w-fit">
//             <button
//               className="transition-transform duration-200 hover:scale-105 w-full sm:w-fit"
//               style={{
//                 padding: "16px 41px",
//                 borderRadius: "8px",
//                 backgroundColor: "transparent",
//                 color: "#FFFFFF",
//                 fontSize: "15.5px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 border: "1px solid rgba(35, 43, 58, 0.1)",

//               }}
//               onClick={mergedData.secondaryButtonClick}
//             >
//               {mergedData.secondaryButtonText}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default Hero;


// import React from "react";
// import heroVariables from "../utils/constants";

// type HeroProps = {
//   title1?: string;
//   title2?: string;
//   subtitle?: string;
//   primaryButtonText?: string;
//   secondaryButtonText?: string;
//   styles?: {
//     container?: React.CSSProperties;
//     image?: React.CSSProperties;
//     innerContainer?: React.CSSProperties;
//     title1?: React.CSSProperties;
//     title2?: React.CSSProperties;
//     subtitle?: React.CSSProperties;
//     button1?: React.CSSProperties;
//     button2?: React.CSSProperties;
//   };
// };

// const Hero: React.FC<HeroProps> = (props) => {
//   const vars = heroVariables.heroMainPageVariables;

//   // Merge props with defaults
//   const merged = {
//     title1: props.title1 ?? vars.title1,
//     title2: props.title2 ?? vars.title2,
//     subtitle: props.subtitle ?? vars.subtitle,
//     primaryButtonText: props.primaryButtonText ?? vars.primaryButtonText,
//     secondaryButtonText: props.secondaryButtonText ?? vars.secondaryButtonText,

//     styles: {
//       container: { ...vars.styles.container, ...(props.styles?.container || {}) },
//       image: { ...vars.styles.image, ...(props.styles?.image || {}) },
//       innerContainer: { ...vars.styles.innerContainer, ...(props.styles?.innerContainer || {}) },
//       title1: { ...vars.styles.title1, ...(props.styles?.title1 || {}) },
//       title2: { ...vars.styles.title2, ...(props.styles?.title2 || {}) },
//       subtitle: { ...vars.styles.subtitle, ...(props.styles?.subtitle || {}) },
//       button1: { ...vars.styles.button1, ...(props.styles?.button1 || {}) },
//       button2: { ...vars.styles.button2, ...(props.styles?.button2 || {}) },
//     },
//   };

//   return (
//     <div style={merged.styles.container}>
//       <img
//         src={vars.backgroundImage}
//         alt={vars.backgroundImageAltText}

//         style={merged.styles.image}
//       />

//       <div style={merged.styles.innerContainer}>
//         <h1 style={merged.styles.title1}>{merged.title1}</h1>

//         <h2 style={merged.styles.title2}>{merged.title2}</h2>

//         <p style={merged.styles.subtitle}>{merged.subtitle}</p>

//         <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
//           <button
//             style={merged.styles.button1}
//             onClick={vars.primaryButtonClick}
//           >
//             {merged.primaryButtonText}
//           </button>

//           <button
//             style={merged.styles.button2}
//             onClick={vars.secondaryButtonClick}
//           >
//             {merged.secondaryButtonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

