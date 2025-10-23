import { Box, Typography, Card, CardContent, TextField, Button, Alert, Stack, Grid, MenuItem } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { useMutation } from '@apollo/client'
import { CREATE_CONTACT_SUBMISSION } from '../graphql/queries'
import { useState } from 'react'


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('general')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; subject?: boolean; message?: boolean }>({})
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({})
  // Spam protection: honeypot and time-based gate
  const [hp, setHp] = useState('')
  const [startTs, setStartTs] = useState<number>(Date.now())

  const [createSubmission, { loading, error }] = useMutation(CREATE_CONTACT_SUBMISSION)

  const validate = () => {
    const next: { name?: string; email?: string; subject?: string; message?: string } = {}
    if (!name.trim()) next.name = 'Name is required'
    const emailVal = email.trim()
    if (!emailVal) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) next.email = 'Enter a valid email address'
    if (!subject) next.subject = 'Subject is required'
    const msgVal = message.trim()
    if (!msgVal) next.message = 'Message is required'
    else if (msgVal.length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    const result = validate()
    if (result.name || result.email || result.subject || result.message) {
      setTouched({ name: true, email: true, message: true })
      return
    }

    // Time-based gate: basic bot throttle (must spend at least ~1.2s on form)
    const latencyMs = Date.now() - startTs
    const isSuspicious = hp.trim().length > 0 || latencyMs < 1200

    // If suspicious, silently accept on UI but skip sending to server
    if (isSuspicious) {
      setName('')
      setEmail('')
      setSubject('general')
      setMessage('')
      setHp('')
      setSuccess(true)
      setTouched({})
      setErrors({})
      return
    }

    await createSubmission({
      variables: {
        data: { name, email, subject, message },
      },
      context: {
        headers: {
          'x-form-latency': String(latencyMs),
          'x-honeypot': hp || '',
        },
      },
    })

    setName('')
    setEmail('')
    setSubject('general')
    setMessage('')
    setSuccess(true)
    setTouched({})
    setErrors({})
  }

  return (
    <Box sx={{ maxWidth: 584, mx: 'auto', px: { xs: 2, sm: 3 }, py: { xs: 2, sm: 3 }, minHeight: 680 }}>
      <Card sx={{ borderRadius: 2, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', minHeight: 680, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot field: hidden from users, visible to naive bots */}
            <Box sx={{ position: 'absolute', left: -10000, top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
              />
            </Box>
            <Stack spacing={2} sx={{ mb: 2 }}>
              {success && (
                <Alert severity="success" variant="outlined">
                  Thanks! We received your message.
                </Alert>
              )}
              {error && (
                <Alert severity="error" variant="outlined">
                  {error.message}
                </Alert>
              )}
            </Stack>

            <Box sx={{ width: '100%', maxWidth: 534, mx: 'auto' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ mb: 1, fontWeight: 600, fontSize: 22, color: 'text.primary', display: 'flex', alignItems: 'center', gap: 1, letterSpacing: '-1.0px' }}
                >
                  <EmailOutlinedIcon sx={{ fontSize: 24, color: 'common.black', transform: 'translateY(2.2px)' }} />
                  Send Us a Message
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography sx={{ height: 24, lineHeight: '24px', fontWeight: 500 }}>
                  Your full name
                </Typography>
                <TextField
                  placeholder="Your full name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => { if (!startTs) setStartTs(Date.now()) }}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, name: true }))
                    validate()
                  }}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  required
                  fullWidth
                  autoComplete="name"
                  sx={{ mt: 1 }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography sx={{ height: 24, lineHeight: '24px', fontWeight: 500 }}>
                  E-mail
                </Typography>
                <TextField
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, email: true }))
                    validate()
                  }}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  required
                  fullWidth
                  autoComplete="email"
                  sx={{ mt: 1 }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography sx={{ height: 24, lineHeight: '24px', fontWeight: 500 }}>
                  Subject
                </Typography>
                <TextField
                  select
                  variant="outlined"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, subject: true }))
                    validate()
                  }}
                  error={Boolean(touched.subject && errors.subject)}
                  helperText={touched.subject && errors.subject}
                  required
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  <MenuItem value="general">General Inquiry</MenuItem>
                  <MenuItem value="training">Training Request</MenuItem>
                  <MenuItem value="consultation">Consultation</MenuItem>
                  <MenuItem value="support">Support</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ height: 24, lineHeight: '24px', fontWeight: 500 }}>
                  Message
                </Typography>
                <TextField
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, message: true }))
                    validate()
                  }}
                  error={Boolean(touched.message && errors.message)}
                  helperText={touched.message && errors.message}
                  multiline
                  required
                  fullWidth
                  autoComplete="off"
                  sx={{
                    mt: 1,
                    // Fix the outer field height to 98px
                    '& .MuiOutlinedInput-root': {
                      height: 98,
                      alignItems: 'flex-start',
                    },
                    // Make the textarea fill the height cleanly
                    '& .MuiOutlinedInput-inputMultiline': {
                      height: '100%',
                      padding: '12px 14px',
                      boxSizing: 'border-box',
                      resize: 'none',
                      overflow: 'auto',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <Box sx={{ mt: 0 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading || Boolean(errors.name || errors.email || errors.subject || errors.message)}
                    sx={{
                      width: '100%',
                      background:
                      'linear-gradient(97.01deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)'
                    }}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Contact
