import { Metadata } from "next"

export const metadata : Metadata = {
  title: {
    absolute: "Acerca"
    //el absolute ignora el template en el rootlayout
  },
  description: "Estas en acerca ami"
}

function About() {
  return <h1>About</h1>
  
}

export default About