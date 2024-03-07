import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();}
    
  return (
    <>
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-5 text-center" controlId="exampleForm.ControlInput1">
                <h1>Cuentanos, En qué te podemos ayudar?</h1>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Button className='mt-2 bg-danger border border-danger' type='submit'>Enviar</Button>
            </Form.Group>
        </Form>
    </Container>    
    </>
  )
}

export default Contact