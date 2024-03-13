import React from 'react'
import ReactDOM from 'react-dom/client'
import MultiGrids from './MultiGrids.jsx'
import ClassNameProvider from './ClassNameProvider.jsx'
import BlackGridCountProvider from './BlackGridCountProvider.jsx'
import ShowCoundNumber from './ShowCountNumber.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlackGridCountProvider>
      <ClassNameProvider>
        <ShowCoundNumber />
        <MultiGrids />
      </ClassNameProvider>
    </BlackGridCountProvider>
  </React.StrictMode>
)
