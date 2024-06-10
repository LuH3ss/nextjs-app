'use client'

import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter();
  
  const handleHome = () => {
    router.push("/")
  }
  return (
    <>
    <div>Login</div>
    <button onClick={handleHome}>Volver</button>
    </>
  )
}
