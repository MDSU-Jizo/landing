import {Dev} from "../components/pages/Dev";
import {Landing} from "../components/pages/Landing";
import {FixedPage} from "../components/pages/FixedPage";


const fixed = {
    url: "/",
    page: <FixedPage />,
};

const dev = {
    url: "/dev",
    page: <Dev />,
};

const landing = {
    url: "/parallax",
    page: <Landing />,
};

export const PAGES = [
    landing,
    dev,
    fixed,
];