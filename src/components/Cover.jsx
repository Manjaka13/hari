import React from "react";
import ProfileCard from "./ProfileCard";
import CoverBottom from "./CoverBottom";
import CoverQuote from "./CoverQuote";
import CoverRight from "./CoverRight";

/*
	Home cover
*/

const Cover = () => (
	<div
		className="cover w-100 h-100 o-h"
		style={{
			background: "url(/assets/backgrounds/0.jpg) center center no-repeat",
			backgroundSize: "cover"
		}}
	>
		<div className="container cover__container h-100">
			<div
				className="w-100 h-100 f-c-st-st"
				style={{
					background: "url(/assets/cover/1.jpg) center center no-repeat",
					backgroundSize: "cover"
				}}
			>
				<div className="w-100 h-80 o-h f-r-be-ce">
					<ProfileCard />
					<CoverRight />
				</div>
				<CoverBottom />
			</div>
		</div>
	</div>
);

export default Cover;
