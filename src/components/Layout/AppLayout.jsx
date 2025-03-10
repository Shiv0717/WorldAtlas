import React from 'react'
import Headers from '../../UI/Headers'
import Footers from '../../UI/Footers'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
     <Headers/>
     <main>
        <Outlet /> 
      </main>
     <Footers/>
    </div>
  )
}

export default AppLayout
