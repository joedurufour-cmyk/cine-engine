import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import PreviewPanel from './components/PreviewPanel'

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-100 overflow-hidden select-none">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <PreviewPanel />
      </div>
    </div>
  )
}
