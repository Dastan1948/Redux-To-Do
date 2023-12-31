import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container max-w-[1200px] mx-auto'>
      {children}
    </div>
  )
}

export default Container