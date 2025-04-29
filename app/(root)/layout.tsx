import React from 'react'

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">Root layout</h1>
        {children}
    </div>
  )
}

export default layout