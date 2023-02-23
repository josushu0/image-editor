import Preview from "./components/Preview"
import SideBar from "./components/SideBar"
import ToolBar from "./components/Toolbar"

function App() {
  return (
    <div className="flex font-sans accent-neutral-900 dark:accent-neutral-100 text-neutral-900 dark:text-neutral-100 dark:bg-neutral-900">
      <ToolBar />
      <SideBar />
      <Preview />
    </div>
  )
}

export default App
