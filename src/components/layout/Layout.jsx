import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar/SideBar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <> 
 <SideBar/>

<div className="p-4 sm:ml-64 min-h-screen">
  <Outlet/>
</div>
<Footer/>
  </>
}
