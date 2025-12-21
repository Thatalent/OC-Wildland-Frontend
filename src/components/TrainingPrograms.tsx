import { Box, Typography, Stack, Button, Chip } from "@mui/material";
export default function TrainingPrograms() {
  return (
    <div className="m-[80px]">
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="16px"
      marginBottom="48px">
        <Typography
        variant="h3"
        component="h1"
        className="mb-8 text-gray-800 font-bold">
          Training Programs
        </Typography>
        <Typography
        variant="subtitle1"
        component="h1"
        className="mb-8 text-gray-800 font-bold">
          Industry-certified courses with expert instruction
        </Typography>
      </Box>
      <Stack direction="row" spacing="33px">
        <Box sx={{
          display: "flex",
          flexDirection:"column",
          borderRadius:"8px",
          border:"1px solid rgba(225, 231, 239, 1)",
          boxShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.05)"}}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            width: "auto",
            height: "192px",
            backgroundColor:"rgba(241, 245, 249, 1)"}}>
            <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderRadius:"50%",
              backgroundColor:"rgba(243, 78, 27, 0.1)",
              width:"80px",
              height:"80px"}}>
              <img className="w-[28px] h-[38px] -white" src="/fire-icon.svg" alt="Fire Icon"/>
            </Box>
            <Typography
            variant="h5"
            component="h2"
            marginTop="16px">
              Wildland Fire Training
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection:"column",
            margin: "24px",
            gap:"6px"}}>
            <Typography variant="h4" component="h2" >
                Wildland Fire Training
            </Typography>
            <Typography variant="body1">
              Learn advanced wildfire suppression techniques and equipment operation for safety protocols.
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            margin: "0 24px 16px 24px",
            gap:"8px"}}>
            <Chip label="NWCG Certified" sx={{
              backgroundColor: "rgba(31, 38, 46, 1)",
              color: 'white',
              height: "22px",
              fontWeight:"600" }}></Chip>
            <Chip variant="outlined" label="Hands-On" sx={{height: "22px", fontWeight:"600"}}></Chip>
          </Box>
          <Button sx={{
            padding:"10px 16px 11px 16px",
            backgroundColor:"rgba(243, 78, 27, 1)",
            "&:hover": {color: "rgba(243, 78, 27, 1)", border:"1px solid rgba(243, 78, 27, 1)"},
            margin:"0 24px 24px 24px",
            color:"white",
            boxShadow:"0, 0, 30px, -10px, rgba(243, 78, 27, 0.3)"}}>
              View Courses
          </Button>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection:"column",
          borderRadius:"8px",
          border:"1px solid rgba(225, 231, 239, 1)",
          boxShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.05)"}}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            width: "auto",
            height: "192px",
            backgroundColor:"rgba(241, 245, 249, 1)"}}>
            <Box sx={{
              display:"flex",
              borderRadius:"50%",
              backgroundColor:"rgba(243, 78, 27, 0.1)",
              width:"80px", height:"80px",
              justifyContent:"center",
              alignItems:"center"}}>
              <img className="w-[28px] h-[38px] -white" src="/heart-icon.svg" alt="Heart Icon"/>
            </Box>
            <Typography variant="h5" component="h2" marginTop="16px">
              CPR & First Aid
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection:"column",
            margin: "24px",
            gap:"6px"}}>
              <Typography variant="h4" component="h2" >
                CPR & First Aid
              </Typography>
              <Typography variant="body1">
                Master CPR techniques and first aid procedures with American Heart Association certification.
              </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            margin: "0 24px 16px 24px",
            gap:"8px"}}>
            <Chip label="AHA Certified" sx={{
              backgroundColor: "rgba(31, 38, 46, 1)",
              color: 'white',
              height: "22px",
              fontWeight:"600" }}></Chip>
            <Chip variant="outlined" label="Life-Saving" sx={{height: "22px", fontWeight:"600"}}></Chip>
          </Box>
          <Button sx={{
            padding:"10px 16px 11px 16px",
            backgroundColor:"rgba(243, 78, 27, 1)",
            "&:hover": {color: "rgba(243, 78, 27, 1)", border:"1px solid rgba(243, 78, 27, 1)"},
            margin:"0 24px 24px 24px",
            color:"white",
            boxShadow:"0, 0, 30px, -10px, rgba(243, 78, 27, 0.3)"}}>
              View Courses
          </Button>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection:"column",
          borderRadius:"8px",
          border:"1px solid rgba(225, 231, 239, 1)",
          boxShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.05)"}}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            width: "auto",
            height: "192px",
            backgroundColor:"rgba(241, 245, 249, 1)"
            }}>
            <Box sx={{
              display:"flex",
              borderRadius:"50%",
              backgroundColor:"rgba(243, 78, 27, 0.1)",
              width:"80px", height:"80px",
              justifyContent:"center",
              alignItems:"center"}}>
              <img className="w-[28px] h-[38px] -white" src="/group-icon.svg" alt="Heart Icon"/>
            </Box>
            <Typography variant="h5" component="h2" marginTop="16px">
              Custom Training
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection:"column",
            margin: "24px",
            gap:"6px"}}>
              <Typography variant="h4" component="h2" >
                Custom & Group Training
              </Typography>
              <Typography variant="body1">
                Our experienced trainers can customize specific training needs for your particular needs.
              </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            margin: "0 24px 16px 24px",
            gap:"8px"}}>
            <Chip label="Customizable" sx={{
              backgroundColor: "rgba(31, 38, 46, 1)",
              color: 'white',
              height: "22px",
              fontWeight:"600" }}></Chip>
            <Chip variant="outlined" label="Group Rates" sx={{ height: "22px", fontWeight:"600"}}></Chip>
          </Box>
          <Button sx={{
            padding:"10px 16px 11px 16px",
            backgroundColor:"rgba(243, 78, 27, 1)",
            "&:hover": {color: "rgba(243, 78, 27, 1)", border:"1px solid rgba(243, 78, 27, 1)"},
            margin:"0 24px 24px 24px",
            color:"white",
            boxShadow:"0, 0, 30px, -10px, rgba(243, 78, 27, 0.3)"}}>
              View Courses
          </Button>
        </Box>
      </Stack>
    </div>
  );
}

