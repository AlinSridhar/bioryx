import Carousel from 'react-bootstrap/Carousel';
import style from './Corousal.module.css'

function Corousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={style.image} src="https://cdn0-production-images-kly.akamaized.net/nB4apiIH4-48R_PLH4LeINABI5g=/640x360/smart/filters:quality(75):strip_icc()/kly-media-production/medias/3550109/original/035971800_1629818605-sid-balachandran-_9a-3NO5KJE-unsplash.jpg"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
    <img className={style.image} src="https://cdn0-production-images-kly.akamaized.net/nB4apiIH4-48R_PLH4LeINABI5g=/640x360/smart/filters:quality(75):strip_icc()/kly-media-production/medias/3550109/original/035971800_1629818605-sid-balachandran-_9a-3NO5KJE-unsplash.jpg"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className={style.image} src="https://cdn0-production-images-kly.akamaized.net/nB4apiIH4-48R_PLH4LeINABI5g=/640x360/smart/filters:quality(75):strip_icc()/kly-media-production/medias/3550109/original/035971800_1629818605-sid-balachandran-_9a-3NO5KJE-unsplash.jpg"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousal;