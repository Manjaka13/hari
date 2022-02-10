import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faSkype
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	faGithub,
	faLinkedin,
	faSkype,
	faEnvelope
);