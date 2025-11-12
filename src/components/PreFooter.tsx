import { useLocation, Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_WILDLANDS_PREFOOTER, GET_WILDLANDS_IMAGES } from "../graphql/queries";
import LoadingSpinner from "./LoadingSpinner"


export default function PreFooter () {
    const location = useLocation();

    const {
      data: preFooterData,
      loading: preFooterLoading,
      error: preFooterError,
    } = useQuery(GET_WILDLANDS_PREFOOTER, {
      variables: { route: location.pathname },
    });

    const {
      data: imageData,
      loading: imageLoading,
      error: imageError,
    } = useQuery(GET_WILDLANDS_IMAGES, {
      variables: {route: location.pathname}
    });

    console.log("Query result:", {preFooterData, preFooterLoading, preFooterError})
    console.log("Image result", imageData);

    if (preFooterLoading) return <LoadingSpinner />;
    if(preFooterError) return <Typography color="error">Error: {preFooterError.message}</Typography>

    if(imageLoading) return <LoadingSpinner />;
    if(imageError) return <Typography color="error">Error: {imageError.message}</Typography>

    const content = preFooterData?.preFooters?.[0];
    const routeSpecific = imageData?.routeImage?.[0];
    const fallback = imageData?.defaultImage?.[0];

    const backgroundImage = routeSpecific || fallback;


    if(!content) return "Something went wrong";

  return (
   <Box sx={{
    backgroundImage: `url(${backgroundImage?.imageUrl?.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    py: "86px",
    px: {xs: "16px"}}}>
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Box>
        <Typography sx={{
          color: "#fff",
          lineHeight: "40px",
          textDecoration: "bold",
          fontWeight: 700,
          fontSize: {xs: "34px", md: "36px"},
          marginBottom: "24px",
          textAlign: "center"}}>{content.title}</Typography>
        <Typography sx={{
          color: "rgba(255,255,255,.9)",
          fontWeight: 400,
          fontSize: "18.44px",
          lineHeight: "28px",
          marginBottom: "24px",
          textAlign: "center",
          maxWidth: "847px"
          }}>{content.subtitle}</Typography>
      </Box>
      <Box sx={{display: "flex",
        gap: "16px",
        justifyContent: "center",
        textWrap: "nowrap",
        flexDirection: {xs: "column", md: "row"}, width: {xs: "100%"}}}>
        <Button component={Link} to={content.ctaPrimaryLink} sx={{
          background: "linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)",
          boxShadow: "0px 10px 30px -10px rgba(243, 78, 27, 0.3)",
          color: "#fff",
          padding: "16px 40px",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          }}>{content.ctaPrimaryText}</Button>
        <Button component={Link} to={content.ctaSecondaryLink} sx={{
          border: "1px solid rgba(255,255,255,.2)",
          padding: "16px 41px",
          color: "#fff",
          fontWeight: 500,
          fontSize: "15.38px"}}>{content.ctaSecondaryText}</Button>
      </Box>
      {content.showQuote && content.quote && (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
          marginTop: "64px",
          maxWidth: "864px",
          backgroundColor: "rgba(255,255,255,.1)",
          borderRadius: 2,
          backdropFilter: "blur(4px)"}}>
          <Typography sx={{
            fontSize: "16.88px",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#fff",
            lineHeight: "28px",
            marginBottom: "16px",
            textAlign: "center",
            maxWidth: "736px"
          }}>{content.quote}</Typography>
          {content.quoteAuthor && (
          <Typography sx={{
            fontWeight: 400,
            fontSize: "15.38px",
            fontStyle: "italic",
            lineHeight: "24px",
            color: "rgba(255,255,255,.8)",
            textAlign: "center",
          }}>— {content.quoteAuthor}</Typography>
          )}
        </Box>
      )}
    </Box>
   </Box>
  )
}
