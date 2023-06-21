import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router'

function App() {
  return (
    <div className=' max-w-[1280px] mx-auto app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
