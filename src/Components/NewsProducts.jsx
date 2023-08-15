import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

// FUNCION DECLARADA ES LA MISMA QUE LA EXPRESADA
function NewsProducts({data}) {
  return (
    <Card>
      <Card.Img // ESTILAMOS LA TAREJAT DE UNA MANERA QPARA QUE NO SE DISTORCIONARA
      variant="top" 
      src={data?.images?.[0]?.url}
      style={{height: 200 , objectFit:"cover"}} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button 
        variant="primary"
        as={Link}
        to={`/products/${data.id}`}
        >Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsProducts;