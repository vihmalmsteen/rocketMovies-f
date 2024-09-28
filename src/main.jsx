// React e components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

// estilos
import GlobalStyles from './styles/global'
import theme from './styles/theme'

// pages
/*
import {Home} from './pages/Home'
import {CreateMovie} from './pages/CreateMovie'
import {MoviePreview} from './pages/MoviePreview/'
import {SignIn} from './pages/SignIn'
import {SignOut} from './pages/SignOut'
import {User} from './pages/User'
*/

// Rotas e contextos (login e auth)
import {Routes} from '../src/routes'
import {AuthProvider} from './hooks/auth.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AuthProvider>          {/* Contexto criado MyContext engloba as rotas. Então qualquer rota tem acesso ao value desse contexto */}
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)

