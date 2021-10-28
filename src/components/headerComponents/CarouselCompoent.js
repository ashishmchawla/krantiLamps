import React from "react";
import { Carousel } from "react-bootstrap";
import firstImage from "../../theme/images/1.png";
import secondImage from "../../theme/images/2.png";
import thirdImage from "../../theme/images/3.png";

const CarouselCompoent = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Kranti Lamps</h3>
                        <p>
                            We are one of the leading Manufacturers of LED
                            Lamps.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondImage}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Kranti Lamps</h3>
                        <p>
                            With Product range from 0.5 watt Decorative Lamps to
                            200 watt Outdoor Luminaries.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdImage}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Kranti Lamps</h3>
                        <p>
                            Our key focus and relentless effort has been to
                            deliver Products with utmost innovation and Quality.
                            This is what sets us apart from the competitors.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselCompoent;
