import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Detail from "./pages/Detail"
import { useEffect, useState } from "react"

function App() {
    const [datas,setData] = useState(null)
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = async() => {
      try {
        const response = await fetch('../Snakes.json')
        if (!response) {
          throw new Error("NetWork Error")
        }
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (err) {
        console.log(err);
        setError("Network Error!");
        setLoading(false);
      }
    }

    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home datas={datas} isLoading={isLoading} error={error}/>} />
        <Route path="detail/:id" element={<Detail datas={datas} isLoading={isLoading} error={error}/>} />
      </Routes>
    </div>
  )
}

export default App
