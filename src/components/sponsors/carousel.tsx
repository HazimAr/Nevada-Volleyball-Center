/* eslint-disable react-hooks/exhaustive-deps */
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-default-export
export default function CarouselExport(): JSX.Element
{
    const [currentSlide, setCurrentSlide] = useState(1)
    function activate() {
        setTimeout(() => { setCurrentSlide(currentSlide + 1); activate()}, 4000)
    }
    useEffect(() => {
        // activate()
    }, [activate]);
	return (
		<CarouselProvider
			naturalSlideWidth={200}
			naturalSlideHeight={25}
			totalSlides={3}
            currentSlide={currentSlide}
            infinite
		>
			<Slider>
				<Slide index={0}>I am the first Slide.</Slide>
				<Slide index={1}>I am the second Slide.</Slide>
				<Slide index={2}>I am the third Slide.</Slide>
			</Slider>
			<div>
				<p>Bitch</p>
			</div>

			<ButtonBack>Back</ButtonBack>
			<ButtonNext>Next</ButtonNext>
		</CarouselProvider>
	);
}
