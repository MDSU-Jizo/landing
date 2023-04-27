import { Label } from "./index";

export default {
    title: 'Example/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        label: 'Label Example',
        htmlFor: 'text-inputExample',
        input: {
            type: 'text',
            name: 'inputExample',
            placeholder: 'Placeholder Example',
        },
    },
};

export const label = {
    args: {
        label: 'Label Example',
        htmlFor:'text-inputExample',
        input: {
            type: 'text',
            name: 'inputExample',
            placeholder: 'Placeholder Example',
        },
    },
};

export const labelRequired = {
    args: {
        label: 'Label Example',
        htmlFor:'text-inputRequiredExample',
        isRequired: true,
        input: {
            type: 'text',
            name: 'inputRequiredExample',
            placeholder: 'Placeholder Example',
        },
    },
};

export const labelOptional = {
    args: {
        label: 'Label Example',
        htmlFor:'text-inputOptionalExample',
        isOptional: true,
        input: {
            type: 'text',
            name: 'inputOptionalExample',
            placeholder: 'Placeholder Example',
        },
    },
};

export const labelRequiredMessage = {
    args: {
        label: 'Label Example',
        htmlFor:'text-inputRequiredMessageExample',
        isRequired: true,
        message: {
            color: 'secondary',
            text: 'Message Example'
        },
        input: {
            type: 'text',
            name: 'inputRequiredMessageExample',
            placeholder: 'Placeholder Example',
        },
    },
};

export const labelOptionalMessage = {
    args: {
        label: 'Label Example',
        htmlFor:'text-inputOptionalMessageExample',
        isOptional: true,
        message: {
            color: 'secondary',
            text: 'Message Example'
        },
        input: {
            type: 'text',
            name: 'inputOptionalMessageExample',
            placeholder: 'Placeholder Example',
        },
    },
};