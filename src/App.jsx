import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Typography, Container, Box, Button, Grid, Card, CardActionArea, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Stack, Link as MuiLink, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import ArticleIcon from '@mui/icons-material/Article'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import { useMemo, useState } from 'react'

function makeTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: '#42a5f5' },
      secondary: { main: '#90caf9' },
      background: mode === 'light' ? { default: '#ffffff', paper: 'rgba(255,255,255,0.7)' } : { default: '#121212', paper: 'rgba(33,33,33,0.7)' }
    },
    shape: { borderRadius: 12 },
    typography: { fontFamily: 'Roboto, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif', fontWeightRegular: 400, fontWeightMedium: 600, fontWeightBold: 700 }
  })
}

const experience = [
  { title: 'Token 13 Software LLC, Dubai', period: 'May 2025 - Present', bullets: [
    'Collaborating cross-functionally to deliver a high-performance crypto wallet aligned with Token 13’s blockchain platform.',
    'Integrating blockchain features such as wallet creation, transaction handling, and multi-chain support.'
  ]},
  { title: 'Senior Android Developer, Tech Carrot FZ LLC, Dubai, UAE', period: 'Feb 2022 - Oct 2024', bullets: [
    'Developed e‑commerce applications for clients like Marks & Spencer and Toys “R” Us.',
    'Improved app stability, security best practices, and release management.'
  ]},
  { title: 'Senior Android Developer, ZIRO RIDE LLC, Dubai, UAE', period: 'Dec 2018 - Dec 2021', bullets: [
    'Built ride‑hailing features incl. payment SDK, AR navigation, live streaming and real‑time updates.',
    'Implemented MVVM with Clean Architecture.'
  ]},
  { title: 'Associate Software Engineer, Cloudium Software, India', period: 'Feb 2017 - Oct 2018', bullets: [
    'Developed native Android, coordinated integration and deployment, integrated Firebase analytics and push.'
  ]},
  { title: 'Software Engineer, Feathersoft Info Solutions, India', period: 'Aug 2015 - Feb 2017', bullets: [
    'Android development, modular architecture redesign for maintainability.'
  ]}
]

const projects = [
  { title: 'Marks & Spencer Mobile', img: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop',
    desc: 'E‑commerce app with real‑time inventory and personalized recommendations. Kotlin, Retrofit, Coroutines.' , link: 'https://www.marksandspencer.com' },
  { title: 'Newsreels', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    desc: 'News aggregator with video-first format. ExoPlayer, Paging, Kotlin Flow.', link: '#' },
  { title: 'ZIRO RIDE', img: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop',
    desc: 'Ride‑hailing app with AR navigation, pricing, and real‑time socket updates.', link: '#' },
  { title: 'Cross‑platform Migration', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    desc: 'Migrated native Android app to Flutter with improved UX and maintainability.', link: '#' }
]

function Section({ id, className, children }) {
  return (
    <Box id={id} className={`section ${className||''}`} sx={{ p: 0 }}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  )
}

function HeaderHero({ mode, toggleMode }) {
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <Section id="header" className="hero">
      <Box sx={{ textAlign: 'center', color: 'text.primary', py: 10, position: 'relative' }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', left: 0, right: 0, top: 8, width: '100%', maxWidth: '100%', px: 2 }}>
          <Stack direction="row" spacing={1} className="pill-nav" sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <MuiLink href="#about">Hey</MuiLink>
            <MuiLink href="#portfolio">Work</MuiLink>
            <MuiLink href="#resume">Story</MuiLink>
            <MuiLink href="#contact">Chat</MuiLink>
          </Stack>
        </Stack>
        <Box sx={{ position: 'absolute', top: 16, right: 24 }}>
          <Button onClick={toggleMode} variant="contained" color="inherit" sx={{ minWidth: 44, width: 44, height: 44, borderRadius: '50%', boxShadow: 2 }} aria-label="Toggle theme">
            {mode === 'light' ? <DarkModeRoundedIcon/> : <WbSunnyRoundedIcon/>}
          </Button>
        </Box>
        <Box sx={{ height: 56 }} />
        <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -2, fontSize: { xs: 48, sm: 80, md: 120 } }}>Shine Joseph</Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, mt: 2 }}>Mobile App Developer</Typography>
      </Box>
    </Section>
  )
}

function About() {
  return (
    <Section id="about">
      <Stack spacing={2} sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>Hey</Typography>
        <Typography>
        I’m a Senior Android Developer with over 9 years of experience building secure, scalable, and high-performance mobile applications. Skilled in Kotlin, Java, and modern Android architectures such as MVVM and Clean Architecture, I specialize in creating user-friendly apps across domains like e-commerce, ride-hailing, and fintech. With a strong background in app optimization, security, and Play Store delivery, I bring a track record of improving stability, enhancing user experience, and collaborating effectively with cross-functional teams.
        </Typography>
        <Typography>
          Recently I’ve worked across e‑commerce, ride‑hailing and crypto wallets: integrating secure payments, live streaming and real‑time sockets, and migrating large native apps to Flutter for faster iteration. I value clean architecture, accessibility, and smooth micro‑interactions that make apps feel alive.
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
          <Button className="elevate-hover" component={MuiLink} href="https://medium.com/@shinejoseph" target="_blank" aria-label="Medium" sx={{ color: (t) => t.palette.mode === 'dark' ? '#fff' : '#000' }}><ArticleIcon/></Button>
          <Button className="elevate-hover" component={MuiLink} href="https://github.com/shinejoseph" target="_blank" aria-label="GitHub" sx={{ color: (t) => t.palette.mode === 'dark' ? '#fff' : '#000' }}><GitHubIcon/></Button>
          <Button className="elevate-hover" component={MuiLink} href="https://twitter.com/shinejoseph" target="_blank" aria-label="Twitter" sx={{ color: (t) => t.palette.mode === 'dark' ? '#fff' : '#000' }}><TwitterIcon/></Button>
        </Stack>
      </Stack>
    </Section>
  )
}

function ResumeTree() {
  return (
    <Section id="resume">
      <Stack spacing={3} sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>Story</Typography>
        <Stack spacing={3}>
          {experience.map((exp, idx) => (
            <Box key={idx} sx={{ p: 3, borderRadius: 3, bgcolor: (theme) => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Grid container spacing={2} alignItems="flex-start">
                <Grid item xs={12} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">{exp.period}</Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="h6" sx={{ mb: 1 }}>{exp.title}</Typography>
                  <ul>
                    {exp.bullets.map((b, i) => <li key={i}><Typography variant="body2">{b}</Typography></li>)}
                  </ul>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Section>
  )
}

function Portfolio() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const onOpen = (p) => { setSelected(p); setOpen(true) }
  const onClose = () => setOpen(false)
  return (
    <Section id="portfolio">
      <Stack spacing={3} sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 800 }}>Work</Typography>
        <Grid container spacing={3}>
          {projects.map((p, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Card elevation={2} className="elevate-hover">
                <CardActionArea onClick={() => onOpen(p)}>
                  <CardMedia component="img" height="280" image={p.img} alt={p.title} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogContent dividers>
          <Typography sx={{ mb: 2 }}>{selected?.desc}</Typography>
          {selected?.link && (
            <Button variant="outlined" href={selected.link} target="_blank">Visit Project</Button>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="hero">
      <Box sx={{ textAlign: 'center', py: 12 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Chat</Typography>
        <MuiLink href="mailto:shinejoseph@outlook.com" underline="hover" sx={{ color: 'text.primary' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -1, fontSize: { xs: 36, sm: 56, md: 72 } }}>
            shinejoseph@outlook.com
          </Typography>
        </MuiLink>
      </Box>
    </Section>
  )
}

export default function App() {
  const [mode, setMode] = useState('dark')
  const theme = useMemo(() => makeTheme(mode), [mode])
  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`snap-container ${mode === 'dark' ? 'dark' : ''}`}>
        <HeaderHero mode={mode} toggleMode={toggleMode} />
        <About />
        <ResumeTree />
        <Portfolio />
        <Contact />
      </Box>
    </ThemeProvider>
  )
}
