import { Link } from "./index";

const image = require("../../../../assets/jizo_outlined.jpeg");
const readme = require("../../../../assets/README.md");

export default {
    title: 'Example/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {
        href:"https://google.fr",
        text: {
            text: "Google.fr",
        },
    },
};

export const link = {
    args: {
        href: "https://google.fr",
        text: {
            text: "Google.fr",
        }
    },
};

export const linkDownload = {
    args: {
        download: readme,
        text: {
            text: 'Download me.',
        },
    },
};

export const imageLink = {
    args: {
        href: "https://google.fr",
        image: {
            src: image,
            alt: "Jizo's logo representing a cute fox smiling",
            width: 200,
            height: 200,
        },
    },
};

export const imageDownload = {
    args: {
        download: image,
        image: {
            src: image,
            alt: "Jizo's logo representing a cute fox smiling",
            width: 200,
            height: 200,
        },
    },
};