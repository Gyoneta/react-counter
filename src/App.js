import React, {useState} from "react"

import Albums from "./Albums"
import Counter from './Counter'
import Users from "./Users"

const defaultPage = 'albums'
function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const pages = {
    albums: {
      text: 'Albums',
    component: Albums},

    counter: {
      text: 'Counter',
      component: Counter},

    users: {
      text: 'Users',
      component: Users
    }
    
    
}

const pageNames = Object.keys(pages)


  const Page = pages[page].component

 return (
  <>
  <h2>{page}</h2>

  {
  pageNames.map(page => 
    <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>
  )
  }
  
    {Page && <Page/>}

    
  </>
 )
}

export default App
