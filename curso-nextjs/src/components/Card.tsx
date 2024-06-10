export default function Card({ children }:{ children: React.ReactNode}){
  const cardStyle = {
    border: 'thin solid red',
    margin: '1rem auto',
    padding: '2rem'
  }

  return (
    <div style={cardStyle} >
        {children}
    </div>
  )
}
