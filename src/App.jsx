import { ThemeProvider } from '@emotion/react'
import GeneralRoutes from './common/routes/GeneralRoutes'
import { theme } from './common/styles/themes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GeneralRoutes />
    </ThemeProvider>
  )
}

export default App
