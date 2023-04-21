import { Input } from "./index";
import moment from "moment/moment";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: "text",
        size: "medium",
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const TemplateText = (props) => <Input.Text
    {...props}
/>;

const TemplateEmail = (props) => <Input.Email
    {...props}
/>;

const TemplateNumber = (props) => <Input.Number
    {...props}
/>;

const TemplatePassword = (props) => <Input.Password
    {...props}
/>;

const TemplateUrl = (props) => <Input.Url
    {...props}
/>;

const TemplateDate = (props) => <Input.Date
    {...props}
/>;

export const text = TemplateText.bind({
    args: {
        label:"Input Text",
        name:"InputTestText",
        placeholder:"Your text here.",
        size:"medium",
        style:{display: "flex", flexDirection: "column"}
    },
});

export const email = TemplateEmail.bind({
    args: {
        label:"Input Email",
        name:"InputTestEmail",
        placeholder:"Your email here.",
        size:"medium",
        style:{display: "flex", flexDirection: "column"}
    },
});

export const number = TemplateNumber.bind({
    args: {
        label:"Input Number",
        name:"InputTestNumber",
        placeholder:"Your number here.",
        size:"medium",
        style:{display: "flex", flexDirection: "column"}
    },
});

export const password = TemplatePassword.bind({
    args: {
        label:"Input password",
        name:"InputTestPassword",
        placeholder:"Your password here.",
        size:"small",
        style:{display: "flex", flexDirection: "column"}
    },
});

export const url = TemplateUrl.bind({
    args: {
        label:"Input url",
        name:"InputTestUrl",
        placeholder:"Your url here.",
        size:"large",
        style:{display: "flex", flexDirection: "column"}
    },
});

export const date = TemplateDate.bind({
    args: {
        label:"Input date",
        name:"InputTestDate",
        placeholder:"Your date here.",
        size:"extraLarge",
        style:{display: "flex", flexDirection: "column"},
        value:moment().format('YYYY-MM-DD')
    },
});
