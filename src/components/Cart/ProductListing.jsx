import { useCartContext } from "../../../context/cart";
import { Row, Col, Card, Button } from "react-bootstrap";
import { getPriceFormaterToClp } from "../../../utils/priceFormater";

const ProductListing = () => {
  const { cart } = useCartContext();

  if (!cart.length) return <p>Tu carrito está vacío</p>;

  return cart.map((product) => (
    <Card key={product.id} className="mb-3">
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>{product.name}</Card.Title>
          </Col>
          <Col md={4}>
            <Card.Text>${getPriceFormaterToClp(product.price)}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  ));
};

export default ProductListing;
