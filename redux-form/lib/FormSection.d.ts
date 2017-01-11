import { Component } from "react";
import { ComponentConstructor } from "../";

interface FormSectionProps {
    /**
     * The name all child fields should be prefixed with.
     */
    name: string;

    /**
     * If you give `FormSection` more than one child element, it will be forced to create a component to wrap
     * them with. You can specify what type of component you would like it to be (`div`, `section`, `span`).
     * Defaults to `'div'`.
     *
     * Note that any additional props (e.g. 'className', 'style') that you pass to `FormSection` will be passed
     * along to the wrapper component.
     */
    component?: ComponentConstructor | string;
}

/**
 * The FormSection component makes it easy to split forms into smaller components that are resuable across
 * multiple forms. It does this by prefixing the name of Field, Fields and FieldArray children, at any depth,
 * with the value specified in the name prop.
 */
export class FormSection extends Component<FormSectionProps, any> {

}
