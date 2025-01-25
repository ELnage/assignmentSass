
import './App.css'
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import MealsByCategory from './components/MealsByCategory/MealsByCategory'
import MealDetails from './components/MealDetails/MealDetails'


const router = createHashRouter([
  {path:"" , element:<Layout/> , children: [

    {index:true , element : <Home/>},
    {path:"category/:name" , element : <MealsByCategory/>},
    {path:"mealdetails/:id" , element: <MealDetails/>},
    {path:"*" , element : <Navigate to="/" />}
  ]}
])

const queryClient = new QueryClient()
function App() {

  return (
    <>

<QueryClientProvider client={queryClient}>


<RouterProvider router={router} />
</QueryClientProvider>

    </>
  )
}

export default App
