import React, { useState } from 'react'
import PageContainer from '../components/PageContainer'
import Products from '../components/Products'

export default function Home({}) {
  return (
      <PageContainer >
        <div className='font-bold h-[200vh] '>
          <Products/>
          </div>
      </PageContainer>
  )
}