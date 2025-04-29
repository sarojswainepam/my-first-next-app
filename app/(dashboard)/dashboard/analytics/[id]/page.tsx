import React from 'react'

async function AnalyticsPageDetails({params}: {params: {id: string}}) {
  const { id } = await params;
  return (
    <div className="text-3xl font-bold underline">AnalyticsPageDetails : {id}</div>
  )
}

export default AnalyticsPageDetails;