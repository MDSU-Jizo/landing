import { Text } from "./index";

export default {
    title: 'Example/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        tag: "h1",
        size: "$1",
        weight: "$bold",
    },
    args: {
        children: 'Hello, World!',
    }
};

const TemplateH1 = (props) => <Text.H1 {...props}>{props.children}</Text.H1>;
const TemplateH2 = (props) => <Text.H2 {...props}>{props.children}</Text.H2>;
const TemplateH3 = (props) => <Text.H3 {...props}>{props.children}</Text.H3>;
const TemplateH4 = (props) => <Text.H4 {...props}>{props.children}</Text.H4>;
const TemplateTitle = (props) => <Text.Title {...props}>{props.children}</Text.Title>;
const TemplateLabel = (props) => <Text.Label {...props}>{props.children}</Text.Label>;
const TemplateSubtitle = (props) => <Text.Subtitle {...props}>{props.children}</Text.Subtitle>;
const TemplateP = (props) => <Text.P {...props}>{props.children}</Text.P>;
const TemplateDiv = (props) => <Text.Div {...props}>{props.children}</Text.Div>;
const TemplateSpan = (props) => <Text.Span {...props}>{props.children}</Text.Span>;
const TemplateLink = (props) => <Text.Link {...props}>{props.children}</Text.Link>;
const TemplateSmall = (props) => <Text.Small {...props}>{props.children}</Text.Small>;
const TemplateButton = (props) => <Text.Button {...props}>{props.children}</Text.Button>;

export const header1 = TemplateH1.bind({
    args: {
        label: "Header 1",
        children: 'Hello, World!',
        tag: "h1",
        size: "$1",
        weight: "$bold",
    },
});

export const header2 = TemplateH2.bind({
    args: {
        label: "Header 2",
        children: 'Hello, World!',
        tag: "h2",
        size: "$2",
        weight: "$semiBold",
    },
});

export const header3 = TemplateH3.bind({
    args: {
        label: "Header 3",
        children: 'Hello, World!',
        tag: "h3",
        size: "$3",
        weight: "$semiBold",
    },
});

export const header4 = TemplateH4.bind({
    args: {
        label: "Header 4",
        children: 'Hello, World!',
        tag: "h4",
        size: "$4",
        weight: "$semiBold",
    },
});

export const title = TemplateTitle.bind({
    args: {
        label: "Title",
        children: 'Hello, World!',
        tag: "h5",
        size: "$5",
        weight: "$semiBold",
    },
});

export const label = TemplateLabel.bind({
    args: {
        label: "Label",
        children: 'Hello, World!',
        tag: "span",
        size: "$6",
        weight: "$medium",
    },
});

export const subtitle = TemplateSubtitle.bind({
    args: {
        label: "Subtitle",
        children: 'Hello, World!',
        tag: "span",
        size: "$7",
        weight: "$medium",
    },
});

export const paragraph = TemplateP.bind({
    args: {
        label: "Paragraph",
        children: 'Hello, World!',
        tag: "p",
        size: "$8",
    },
});

export const div = TemplateDiv.bind({
    args: {
        label: "Div",
        children: 'Hello, World!',
        tag: "div",
        size: "$8",
    },
});

export const span = TemplateSpan.bind({
    args: {
        label: "Span",
        children: 'Hello, World!',
        tag: "span",
        size: "$8",
    },
});

export const link = TemplateLink.bind({
    args: {
        label: "Link",
        children: 'Hello, World!',
        tag: "span",
        size: "$8",
        decoration: "underline",
    },
});

export const small = TemplateSmall.bind({
    args: {
        label: "Small",
        children: 'Hello, World!',
        tag: "small",
        size: "$9",
    },
});

export const button = TemplateButton.bind({
    args: {
        label: "Button",
        children: 'Hello, World!',
        tag: "span",
        weight: "$medium",
    },
});
