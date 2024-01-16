//SingInPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  LinearProgress,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function SignInSignUpPage({ mode }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(mode === 'register');


  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "Este campo es obligatorio.";
    tempErrors.email = email ? "" : "Este campo es obligatorio.";
    tempErrors.cellNumber = cellNumber ? "" : "Este campo es obligatorio.";
    tempErrors.documentNumber = documentNumber ? "" : "Este campo es obligatorio.";
    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[@$!%*?&]/.test(password)) strength += 1;

    if (strength <= 2) return 'Baja';
    if (strength === 3) return 'Media';
    return 'Alta';
  };

  const handleEmailBlur = () => {
    setEmailError(!isEmailValid(email) && email !== '');
  };

  const isEmailValid = (email) => {
    return email.includes('@');
  };

  const handleDocumentNumberChange = (event) => {
    setDocumentNumber(formatDocumentNumber(event.target.value));
  };

  const handleCellNumberChange = (event) => {
    setCellNumber(formatPhoneNumber(event.target.value));
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setIsSignUpActive(newAlignment === 'register');
    }
  };
  useEffect(() => {
    setShowPassword(false);
    setPassword('');
    setPasswordStrength('');
    setEmail('');
    setEmailError(false);
    setFullName('');
    setDocumentType('');
    setDocumentNumber('');
    setCellNumber('');
    setErrors({});
    setIsSignUpActive(mode === 'register');
  }, [mode]);

  const isFormValid = () => {
    return (
      fullName &&
      email &&
      documentType &&
      documentNumber &&
      cellNumber &&
      password &&
      isEmailValid(email) &&
      acceptTerms &&
      acceptPrivacy
    );
  };

  const formatDocumentNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, ''); // Eliminar cualquier carácter no numérico
    if (numbers.startsWith('3')) { // Solo permitir si comienza con 3
      if (numbers.length > 10) {
        numbers = numbers.slice(0, 10); // Limitar a 10 dígitos
      }
      const match = numbers.match(/^(\d{3})(\d{3})(\d{4})$/);
      return match ? `(${match[1]}) ${match[2]} ${match[3]}` : numbers;
    }
    return numbers.length > 0 ? '3' : ''; // Forzar el primer dígito a 3 o dejar vacío
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={isSignUpActive ? 'register' : 'login'}
          exclusive
          onChange={handleAlignment}
          sx={{ mb: 2 }}
        >
          <ToggleButton value="login">Iniciar Sesión</ToggleButton>
          <ToggleButton value="register">Registrarse</ToggleButton>
        </ToggleButtonGroup>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Alinea el contenido al centro hasta que se elija una opción
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 1,
            padding: 2,
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5">
            {isSignUpActive ? 'Crea una cuenta' : 'Inicia Sesión'}
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {isSignUpActive && (
              <Box sx={{ mt: 2, width: '100%' }}>
                <TextField
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Nombre completo"
                  autoFocus
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  sx={{ textAlign: 'left' }}
                  select
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Tipo de documento"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        style: {
                          marginTop: 0,
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
                  <MenuItem value="CE">Cédula de Extranjería</MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Número de documento"
                  value={documentNumber}
                  onChange={handleDocumentNumberChange}
                  inputProps={{ maxLength: 12 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Número de celular"
                  value={cellNumber}
                  onChange={handleCellNumberChange}
                  inputProps={{ maxLength: 13 }}
                />
                <TextField
                  error={emailError}
                  helperText={emailError ? "Email no válido" : ""}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Correo electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleEmailBlur}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={password ? "" : "Tu contraseña debe tener al menos una letra mayúscula, un número y un caracter especial."}
                />
                <LinearProgress
                  variant="determinate"
                  value={passwordStrength === 'Baja' ? 33 : passwordStrength === 'Media' ? 66 : passwordStrength === 'Alta' ? 100 : 0}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    marginTop: 1,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor:
                        passwordStrength === 'Baja'
                          ? 'red'
                          : passwordStrength === 'Media'
                            ? 'orange'
                            : 'green',
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    color:
                      passwordStrength === 'Baja'
                        ? 'red'
                        : passwordStrength === 'Media'
                          ? 'orange'
                          : 'green',
                    marginTop: 1,
                  }}
                >
                  Seguridad de la contraseña: {passwordStrength}
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >

                  <FormControlLabel
                    sx={{ alignSelf: 'flex-start' }}
                    control={
                      <Checkbox
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                      />
                    }
                    label="Acepto los términos y condiciones"
                  />
                  <FormControlLabel
                    sx={{ alignSelf: 'flex-start' }}
                    control={
                      <Checkbox
                        checked={acceptPrivacy}
                        onChange={(e) => setAcceptPrivacy(e.target.checked)}
                      />
                    }
                    label="Autorizo el tratamiento de datos personales"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!isFormValid()}
                  >
                    Crea tu cuenta
                  </Button>
                </Box>
              </Box>
            )}
            {!isSignUpActive && (
              <Box sx={{ mt: 2, width: '100%' }}>
                <TextField
                  sx={{ textAlign: 'left' }}
                  select
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Tipo de documento"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                >
                  <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
                  <MenuItem value="CE">Cédula de Extranjería</MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Número de documento"
                  value={documentNumber}
                  onChange={handleDocumentNumberChange}
                  type="text"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Contraseña"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ingresar
                </Button>
                <Typography variant="body2" style={{ textAlign: "center", marginTop: "8px" }}>
                  <Link to="/recover-password" style={{ textDecoration: 'none' }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Typography>
              </Box>
            )}
          </form>
        </Box>
      </Box>
    </Container>
  );
}
