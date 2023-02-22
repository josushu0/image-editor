import Preview from "./components/Preview"
import SideBar from "./components/SideBar"
import ToolBar from "./components/Toolbar"

function App() {
  return (
    <main className="flex font-sans accent-neutral-900">
      <ToolBar />
      <SideBar />
      <Preview />
    </main>
  )
}

export default App
