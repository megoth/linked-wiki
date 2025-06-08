import {visit} from 'unist-util-visit'
import {Element, Root} from "./types";

interface Options {
    elements?: string[]
}

export default function rehypeLinkReferences(options: Options = {}) {
    const {elements = ["a"]} = options;
    return (tree: Root): void => {
        visit(tree, "element", (element: Element) => {
            if (elements.includes(element.tagName)) {
                element.properties = {
                    ...element.properties,
                    property: "http://purl.org/dc/terms/references"
                }
            }
        });
    }
}