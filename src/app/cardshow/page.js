import AddCardButton from '@/components/AddCardButton/AddCardButton'
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-200 h-screen'>
        <NavBar/>
        <AddCardButton/>
    </div>
  )
}

export async function generateMetadata(){
 
  return{
    title: "Add New Card",
  }

}