import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from "./routes/routes"

import './app.scss';
import Header from "./component/Header";

export const App = () => (
  <ChakraProvider>
    {true && <Header />}
    <AppRoutes />
  </ChakraProvider>
)
