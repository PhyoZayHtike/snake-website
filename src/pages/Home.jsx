import React from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Card from '../components/Card'

function Home({datas,isLoading,error}) {
  return (
    <div>
       {error && <Error error={error}/>}    
       {isLoading && <Loading/>}
       {!error && !isLoading && <Card datas={datas}/>}    
    </div>
  )
}

export default Home