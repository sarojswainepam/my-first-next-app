import React from 'react'

async function UserPageDetails({params}: {params: {id: string}}) {
  const { id } = await params;
  return (
    <div className="text-3xl font-bold underline">UserPageDetails : {id}</div>
  )
}

export default UserPageDetails;