import React, { useState, useEffect } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

/*
	Navigation bar
*/

const title = "Harijaona";
const splittedTittle = title.split("");

const Navbar = () => {
	const [currentChar, setCurrentChar] = useState(-1);
	const [cube, setCube] = useState("cube");

	useEffect(() => {
		setTimeout(() => {
			setCube("cube cube--shine");
			setTimeout(() => {
				setCube("cube cube--show");
			}, 500);
		}, 2300);
	}, []);

	useEffect(() => {
		const startDelay = 1000;
		const delay = 100;
		setTimeout(() => {
			if(currentChar < splittedTittle.length)
				setTimeout(() => {
					setCurrentChar(prevState => prevState + 1);
				}, delay);
		}, currentChar === -1 ? startDelay : 0);
	}, [currentChar]);

	const mappedChars = splittedTittle.map((c, key) => (
		<span
			className={`char white tr-200 ${currentChar >= key && 'char--visible'} ${key < 4 && 'theme'}`}
			key={key}
		>
			{c}
		</span>
	));

	return (
		<nav className="navbar w-100 bg-theme2 f-r-ce-ce">
			<div className="container">
				<div className="f-r-st-st">
					<Image
						className="logo mg-r-20 br-50 o-h n-s"
						style={{ background: "rgb(20, 20, 20)" }}
						alt="Logo"
						width={ 60 }
						height={ 60 }
						src="/assets/heart.png"
					/>
					<div className="title">
						<h1 className="fs-250 n-s p-n">
							{ mappedChars }
						</h1>
						<h2 className="title-shadow fs-250 n-s p-n">
							{ title }
						</h2>
					</div>
					<div className={ `${cube} w-10px h-10px` }></div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;