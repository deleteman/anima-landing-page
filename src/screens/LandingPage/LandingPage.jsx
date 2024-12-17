import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StarIcon from "@mui/icons-material/Star";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const LandingPage = () => {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <img
              src="/img/logo-icon.svg"
              alt="Logo icon"
              width={37}
              height={29}
            />
            <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>
              whitepace
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={4}>
            {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
              <Box key={item} display="flex" alignItems="center" gap={1}>
                <Typography variant="body1" color="inherit">
                  {item}
                </Typography>
                <ArrowDropDownIcon />
              </Box>
            ))}
            <Button variant="contained" color="secondary">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Try Whitepace free
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box bgcolor="primary.main" py={12} position="relative">
        <Container>
          <img
            src="/img/element.png"
            alt="Element"
            style={{
              position: "absolute",
              top: 152,
              left: 0,
              width: "100%",
              height: 433,
            }}
          />
          <Box color="white" textAlign="left">
            <Typography variant="h2" gutterBottom>
              Get More Done with whitepace
            </Typography>
            <Typography variant="body1" gutterBottom>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </Typography>
            <Button variant="contained" color="primary">
              Try Whitepace free
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Project Management
            </Typography>
            <Typography variant="body1" gutterBottom>
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </Typography>
            <Button variant="contained" color="primary">
              Get Started
              <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="primary.100" height={448} />
          </Grid>
        </Grid>

        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Box bgcolor="primary.100" height={542.76} position="relative">
              <Box
                position="absolute"
                top={0}
                left={29}
                width={543}
                height={543}
                borderRadius="50%"
                border="2px dashed #a7cefc"
              />
              <Box
                position="absolute"
                top={28}
                left={141}
                width={318}
                height={318}
                borderRadius="50%"
                border="2px dashed #a7cefc"
              />
              <Box
                position="absolute"
                top={243}
                left={0}
                width={57}
                height={57}
                bgcolor="#ff5758"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={243}
                left={430}
                width={57}
                height={57}
                bgcolor="#37a3ff"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={402}
                left={272}
                width={57}
                height={57}
                bgcolor="#ffbf60"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={243}
                left={28}
                width={57}
                height={57}
                bgcolor="#37a3ff"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={466}
                left={28}
                width={57}
                height={57}
                bgcolor="#37a3ff"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={58}
                left={463}
                width={57}
                height={57}
                bgcolor="#37a3ff"
                borderRadius="50%"
              />
              <img
                src="/img/group-29.png"
                alt="Group"
                style={{
                  position: "absolute",
                  top: 329,
                  left: 526,
                  width: 57,
                  height: 57,
                }}
              />
              <img
                src="/img/group-297.png"
                alt="Group"
                style={{
                  position: "absolute",
                  top: 84,
                  left: 273,
                  width: 57,
                  height: 57,
                }}
              />
              <Box
                position="absolute"
                top={19}
                left={115}
                width={57}
                height={57}
                bgcolor="#ffdc4d"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={231}
                left={259}
                width={82}
                height={82}
                bgcolor="white"
                borderRadius="10px"
                boxShadow="0px 4px 50px -11px #00000040"
              >
                <img
                  src="/img/logo-icon-1.svg"
                  alt="Logo icon"
                  style={{
                    position: "absolute",
                    top: 21,
                    left: 15,
                    width: 53,
                    height: 40,
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Work together
            </Typography>
            <Typography variant="body1" gutterBottom>
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </Typography>
            <Button variant="contained" color="primary">
              Try it now
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom color="white">
              Use as Extension
            </Typography>
            <Typography variant="body1" gutterBottom color="white">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </Typography>
            <Button variant="contained" color="primary">
              Let’s Go
              <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="primary.100" height={479} />
          </Grid>
        </Grid>

        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Box bgcolor="primary.100" height={499.3} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Customise it to your needs
            </Typography>
            <Typography variant="body1" gutterBottom>
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </Typography>
            <Button variant="contained" color="primary">
              Let’s Go
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" py={12}>
          <Typography variant="h1" gutterBottom>
            Choose Your Plan
          </Typography>
          <Typography variant="body1" gutterBottom>
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </Typography>
        </Box>

        <Grid container spacing={8} justifyContent="center">
          {[
            {
              title: "Free",
              price: "$0",
              description: "Capture ideas and find them quickly",
              features: [
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ],
            },
            {
              title: "Personal",
              price: "$11.99",
              description: "Keep home and family on track",
              features: [
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ],
            },
            {
              title: "Organization",
              price: "$49.99",
              description: "Capture ideas and find them quickly",
              features: [
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Connect primary Google Calendar account",
                "Add due dates, reminders, and notifications to your tasks",
              ],
            },
          ].map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography variant="h5" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {plan.description}
                </Typography>
                <List>
                  {plan.features.map((feature) => (
                    <ListItem key={feature}>
                      <ListItemIcon>
                        <StarIcon />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              100% your data
            </Typography>
            <Typography variant="body1" gutterBottom>
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </Typography>
            <Button variant="contained" color="primary">
              Read more
              <ArrowRightAltIcon />
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative" height={381.13}>
              <img
                src="/img/ellipse-14.svg"
                alt="Ellipse"
                style={{
                  position: "absolute",
                  top: 11,
                  left: 39,
                  width: 604,
                  height: 302,
                }}
              />
              <img
                src="/img/line-3.svg"
                alt="Line"
                style={{
                  position: "absolute",
                  top: 310,
                  left: 39,
                  width: 601,
                  height: 3,
                }}
              />
              <img
                src="/img/line-4.svg"
                alt="Line"
                style={{
                  position: "absolute",
                  top: 71,
                  left: 40,
                  width: 128,
                  height: 177,
                }}
              />
              <img
                src="/img/line-5.svg"
                alt="Line"
                style={{
                  position: "absolute",
                  top: 89,
                  left: 416,
                  width: 127,
                  height: 159,
                }}
              />
              <Box
                position="absolute"
                top={245}
                left={284}
                width={137}
                height={137}
                border="3px dashed #a7cefc"
                borderRadius="10px"
              />
              <Box
                position="absolute"
                top={272}
                left={311}
                width={81}
                height={81}
                bgcolor="white"
                boxShadow="0px 4px 50px -11px #00000033"
                borderRadius="10px"
              />
              <Box
                position="absolute"
                top={272}
                left={0}
                width={81}
                height={81}
                bgcolor="white"
                boxShadow="0px 4px 50px -11px #00000033"
                borderRadius="10px"
              />
              <img
                src="/img/protection-1.svg"
                alt="Protection"
                style={{
                  position: "absolute",
                  top: 72,
                  left: 4,
                  width: 49,
                  height: 49,
                }}
              />
              <Box
                position="absolute"
                top={272}
                left={600}
                width={81}
                height={81}
                bgcolor="white"
                boxShadow="0px 4px 50px -11px #00000033"
                borderRadius="10px"
              />
              <img
                src="/img/padlock-1.svg"
                alt="Padlock"
                style={{
                  position: "absolute",
                  top: 72,
                  left: 616,
                  width: 49,
                  height: 49,
                }}
              />
              <Box
                position="absolute"
                top={8}
                left={500}
                width={81}
                height={81}
                bgcolor="white"
                boxShadow="0px 4px 50px -11px #00000033"
                borderRadius="10px"
              />
              <img
                src="/img/database-1.svg"
                alt="Database"
                style={{
                  position: "absolute",
                  top: 12,
                  left: 516,
                  width: 49,
                  height: 49,
                }}
              />
              <Box
                position="absolute"
                top={8}
                left={119}
                width={81}
                height={81}
                bgcolor="white"
                boxShadow="0px 4px 50px -11px #00000033"
                borderRadius="10px"
              />
              <img
                src="/img/key-1.svg"
                alt="Key"
                style={{
                  position: "absolute",
                  top: 12,
                  left: 134,
                  width: 49,
                  height: 49,
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={330}
                width={26}
                height={26}
                bgcolor="#a7cefc"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={177}
                left={232}
                width={26}
                height={26}
                bgcolor="#a7cefc"
                borderRadius="50%"
              />
              <Box
                position="absolute"
                top={300}
                left={510}
                width={26}
                height={26}
                bgcolor="#a7cefc"
                borderRadius="50%"
              />
              <img
                src="/img/logo-icon-2.svg"
                alt="Logo icon"
                style={{
                  position: "absolute",
                  top: 293,
                  left: 325,
                  width: 51,
                  height: 39,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" py={12}>
          <Typography variant="h1" gutterBottom>
            Our sponsors
          </Typography>
          <img
            src="/img/sponsors.svg"
            alt="Sponsors"
            style={{ width: "100%" }}
          />
        </Box>

        <Grid container spacing={10} py={12}>
          <Grid item xs={12} md={6}>
            <Box position="relative" height={470.8}>
              <Box
                position="absolute"
                top={34}
                left={139}
                width={291}
                height={291}
                borderRadius="50%"
                border="2px dashed #4f9cf9"
              />
              <Box
                position="absolute"
                top={180}
                left={9}
                width={291}
                height={291}
                borderRadius="50%"
                border="2px dashed #4f9cf9"
              />
              <Box
                position="absolute"
                top={180}
                left={255}
                width={291}
                height={291}
                borderRadius="50%"
                border="2px dashed #4f9cf9"
              />
              <Box
                position="absolute"
                top={147}
                left={393}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/slack-1.svg"
                  alt="Slack"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={277}
                left={0}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/outlook-1.svg"
                  alt="Outlook"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={277}
                left={509}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/google-drive-1.svg"
                  alt="Google drive"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={147}
                left={103}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/dropbox-1.svg"
                  alt="Dropbox"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={380}
                left={255}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/google-calendar-1.svg"
                  alt="Google calendar"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={0}
                left={252}
                width={73}
                height={73}
                bgcolor="white"
                borderRadius="50%"
              >
                <img
                  src="/img/gmail-1.svg"
                  alt="Gmail"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 44,
                    height: 44,
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={227}
                left={238}
                width={104}
                height={104}
                bgcolor="white"
                borderRadius="50%"
              />
              <img
                src="/img/group.png"
                alt="Group"
                style={{
                  position: "absolute",
                  top: 259,
                  left: 264,
                  width: 51,
                  height: 39,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom color="white">
              Work with Your Favorite Apps Using whitepace
            </Typography>
            <Typography variant="body1" gutterBottom color="white">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </Typography>
            <Button variant="contained" color="primary">
              Read more
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" py={12}>
          <Typography variant="h1" gutterBottom>
            What Our Clients Say
          </Typography>
        </Box>

        <Grid container spacing={8} justifyContent="center">
          {[
            {
              quote:
                "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
              name: "Oberon Shaw, MCH",
              title: "Head of Talent Acquisition, North America",
              avatar: "/img/avater.png",
              bgColor: "white",
              textColor: "#212529",
              borderColor: "#212529",
            },
            {
              quote:
                "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
              name: "Oberon Shaw, MCH",
              title: "Head of Talent Acquisition, North America",
              avatar: "/img/avater-1.png",
              bgColor: "#4f9cf9",
              textColor: "white",
              borderColor: "white",
            },
            {
              quote:
                "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
              name: "Oberon Shaw, MCH",
              title: "Head of Talent Acquisition, North America",
              avatar: "/img/avater-2.png",
              bgColor: "#4f9cf9",
              textColor: "white",
              borderColor: "white",
            },
          ].map((client, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: client.bgColor,
                  color: client.textColor,
                  borderBottom: `1px solid ${client.borderColor}`,
                }}
              >
                <img
                  src={client.avatar}
                  alt="Quote"
                  style={{ width: 95, height: 95, borderRadius: "50%" }}
                />
                <Typography variant="body1" gutterBottom>
                  {client.quote}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {client.name}
                </Typography>
                <Typography variant="body2">{client.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" py={12}>
          <Typography variant="h1" gutterBottom>
            Try Whitepace today
          </Typography>
          <Typography variant="body1" gutterBottom>
            Get started for free. <br />
            Add your whole team as your needs grow.
          </Typography>
          <Button variant="contained" color="primary">
            Try Taskey free
            <ArrowRightAltIcon />
          </Button>
          <Typography variant="body1" gutterBottom>
            On a big team? Contact sales
          </Typography>
          <img src="/img/app-icon.svg" alt="App icon" />
        </Box>
      </Container>

      <Box bgcolor="primary.main" py={12}>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="center" mb={2}>
                <img
                  src="/img/logo-icon-3.svg"
                  alt="Logo icon"
                  width={37}
                  height={29}
                />
                <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>
                  whitepace
                </Typography>
              </Box>
              <Typography variant="body2" color="white">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world.
              </Typography>
            </Grid>
            {[
              {
                title: "Product",
                items: ["Overview", "Pricing", "Customer stories"],
              },
              {
                title: "Resources",
                items: ["Blog", "Guides & tutorials", "Help center"],
              },
              {
                title: "Company",
                items: ["About us", "Careers", "Media kit"],
              },
            ].map((section) => (
              <Grid item xs={12} md={3} key={section.title}>
                <Typography variant="h6" color="white" gutterBottom>
                  {section.title}
                </Typography>
                <List>
                  {section.items.map((item) => (
                    <ListItem key={item} button>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Try It Today
              </Typography>
              <Typography variant="body2" color="white" gutterBottom>
                Get started for free. Add your whole team as your needs grow.
              </Typography>
              <Button variant="contained" color="primary">
                Start today
                <ArrowRightAltIcon />
              </Button>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <IconButton color="inherit">
                <img src="/img/icon-28.svg" alt="Icon" />
              </IconButton>
              <Typography variant="body2" color="white">
                English
              </Typography>
              <ArrowDropDownIcon />
              <Typography variant="body2" color="white">
                Terms & privacy
              </Typography>
              <Typography variant="body2" color="white">
                Security
              </Typography>
              <Typography variant="body2" color="white">
                Status
              </Typography>
              <Typography variant="body2" color="white">
                ©2021 Whitepace LLC.
              </Typography>
            </Box>
            <IconButton color="inherit">
              <img src="/img/social-icon.svg" alt="Social icon" />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
