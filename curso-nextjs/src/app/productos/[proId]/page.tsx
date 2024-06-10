// creando metadata dinamica 
import { Metadata } from "next"

type Props = {
  params: {
      proId: string
    }
  }
export const generateMetadata =  ({params}: Props): Metadata => {
  return {
    title: `Producto ${params.proId}`
  }
}

export default function Producto({
    params 
} : Props) {
  return (
    <div>Producto: {params.proId}</div>
  )
}
