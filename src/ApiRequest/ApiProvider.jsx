'use client'
import DataContext from '@/Context/dataContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function ApiProvider({children}) {
    const [data,setData]=useState([])
    useEffect(()=>{
        (async()=>{
        const res= await axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
       console.log(res.data)
        setData(res)
        })()
    },[])
    console.log(data)

  return (
   <>
    <DataContext.Provider value={data}>
{children}
    </DataContext.Provider>
   </>
  )
}
