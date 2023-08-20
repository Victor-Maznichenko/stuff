import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AppRoutes from "./components/Routes/Routes"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="flex-container">
            <Sidebar />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
