import Carousel from "react-bootstrap/Carousel";

const MusicStoreCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="ruta-de-tu-imagen-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Descubre las últimas novedades musicales</h3>
          <p>Explora nuestra amplia selección de música de alta calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="ruta-de-tu-imagen-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Encuentra tu ritmo perfecto</h3>
          <p>Explora géneros diversos y encuentra la música que te encanta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ruta-de-tu-imagen-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sumérgete en la experiencia musical</h3>
          <p>Descubre un mundo de sonidos con nuestra tienda de música.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MusicStoreCarousel;
