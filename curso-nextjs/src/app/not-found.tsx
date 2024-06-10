import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return ( 
    <div>
        <h1>NotFound</h1>
        <Link href="/"><button>Volver?</button></Link>
    </div>
  )
}
