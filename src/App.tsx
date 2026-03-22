import { ConfigProvider, theme } from "antd"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Dashboard />
    </ConfigProvider>
  )
}

export default App
