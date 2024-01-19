import React from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import CardDetail from '../components/CardDetail'
import { useParams } from 'react-router-dom'

function Detail({datas,isLoading,error}) {
  const {id} = useParams()
  return (
    <div>
       { error && <Error error={error}/>}    
       {isLoading && <Loading/>}
       {!error && !isLoading && <CardDetail datas={datas} id={id}/>}    
    </div>
  )
}

export default Detail