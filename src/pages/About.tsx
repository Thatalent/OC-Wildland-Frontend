import TestimonyCarousel from "../components/TestimonyCarousel"
import { KPIStats } from '../components/KPIStats'
import MeetTheTeam from '../components/MeetTheTeam'
import BaseBanner from "../components/BaseBanner"
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Button, Container } from '@mui/material'

function About() {
  return (
    <Box>

      <BaseBanner image={"https://i.imgur.com/AAVUFCM.jpeg"} imageFirst={false}>
        {/* TESTING TODO: Make components that wrap BaseBanner for more specific cases */}
        <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: "24px" }}>Empowering Southern California with Essential Wildland Fire and CPR Training Programs</Typography> {/* Title Component */}
        <Typography sx={{ marginBottom: "24px" }}>At OC Wildland Fire and CPR Training, we provide comprehensive
          training programs designed to equip individuals with life-saving skills.
          Our courses cover NWCG certified wildland fire suppression, ensuring
          that you are prepared for emergencies.</Typography> {/* Body Component */}
        <List disablePadding> {/* Checklist */}
          <ListItem disableGutters sx={{ paddingTop: 0 }}>
            <ListItemText primary="Wildland Firefighter Training for All Skill Levels" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="CPR Certification Courses to Save Lives" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Hands-On Training with Experienced Instructors" />
          </ListItem>
          <ListItem disableGutters sx={{ paddingBottom: 0 }}>
            <ListItemText primary="Flexible Scheduling with Online and Hybrid Options" />
          </ListItem>
        </List>
        <Container disableGutters sx={{ paddingTop: "24px" }}>  {/* CTA Container & Buttons */}
          <Button variant="gradient">View Courses</Button>
          <Button>Schedule Consultation</Button>
        </Container>
      </BaseBanner>
      <BaseBanner image={"https://i.imgur.com/AAVUFCM.jpeg"}>
        {/* TESTING TODO: Make components that wrap BaseBanner for more specific cases */}
        <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: "24px" }}>Empowering Communities
          Through Training and Awareness in Wildland Fire Safety</Typography> {/* Title Component */}
        <Typography sx={{ marginBottom: "24px" }}>Founded in response to the increasing threat of wildland fires, OC
          Wildland Fire and CPR Training is dedicated to equipping individuals and
          organizations with the knowledge and skills necessary to handle these
          safety, community preparedness, and proactive education; ensuring that
          everyone is prepared to respond effectively to an emergency.</Typography> {/* Body Component */}
      </BaseBanner>
      <BaseBanner image={"https://i.imgur.com/AAVUFCM.jpeg"} imageFirst={false}>
        {/* TESTING TODO: Make components that wrap BaseBanner for more specific cases */}
        <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: "24px" }}>Why Choose Custom Training?</Typography> {/* Title Component */}
        <Typography sx={{ marginBottom: "24px" }}>Our custom group training programs offer the flexibility and personalization that standard courses can't provide. Whether you're training a fire department, corporate safety team, or community organization, we adapt our curriculum to meet your unique requirements and goals.</Typography> {/* Body Component */}
        <List disablePadding> {/* Checklist */}
          <ListItem disableGutters sx={{ paddingTop: 0 }}>
            <ListItemText primary="On-Site Training Available"
              secondary="We bring our certified instructors directly to your location, saving time and reducing costs for
                your team." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Flexible Scheduling Options"
              secondary="Choose training dates and times that work with your team's schedule." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Customized Curriculum"
              secondary="Tailored content that addresses your organization's specific challenges and requirements." />
          </ListItem>
          <ListItem disableGutters sx={{ paddingBottom: 0 }}>
            <ListItemText primary="Group Discounts"
              secondary="We bring our certified instructors directly to your location, saving time and reducing costs for
your team." />
          </ListItem>
        </List>
        <Container disableGutters sx={{ paddingTop: "24px" }}>  {/* CTA Container & Button */}
          <Button variant="gradient">Schedule a Consultation</Button>
        </Container>
      </BaseBanner>

      <MeetTheTeam />
      <TestimonyCarousel />
      <KPIStats pattern="about" className="mb-8" />
    </Box>
  )
}

export default About;
