'use client'
import { useState } from "react"

export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [input, setInput] = useState("")
    return (
      < >
    <input type="text"value={input}  onChange={(e) => {
        setInput(e.target.value)
    }} />
      
        <h1>Rutas relativas a Profile</h1>
          {children}
         
      </>
    )
  }
  