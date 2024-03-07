import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <div>
        <Container className="text-center">
            <h1 className="mt-5">Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
            <p>El lugar de los pasteles felices</p>
            <p style={{ fontSize: "4.5em" }}>🎂</p>
        </Container>
    </div>
  )
}

export default Home