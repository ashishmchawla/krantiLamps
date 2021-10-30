import React from "react";
import { Carousel } from "react-bootstrap";
import fifthImage from "../../theme/images/5.png";
import sixthImage from "../../theme/images/6.png";
import seventhImage from "../../theme/images/7.png";
import eigththImage from "../../theme/images/8.png";
import ninethImage from "../../theme/images/9.png";
import tenthImage from "../../theme/images/10.png";
import eleventhImage from "../../theme/images/11.png";

const CarouselCompoent = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fifthImage}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sixthImage}
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={seventhImage}
                        alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={eigththImage}
                        alt="Eightth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ninethImage}
                        alt="Nineth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tenthImage}
                        alt="Tenth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={eleventhImage}
                        alt="Eleventh slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselCompoent;
