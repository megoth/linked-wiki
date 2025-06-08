import {visit} from 'unist-util-visit'
import {Element, Root} from "./types";

interface Options {
    elements?: string[]
}

export default function rehypeMainTitleProperty(options: Options = {}) {
    const {elements = ["h1"]} = options;
    return (tree: Root): void => {
        visit(tree, "element", (element: Element) => {
            if (elements.includes(element.tagName)) {
                element.properties = {
                    ...element.properties,
                    property: "http://purl.org/dc/terms/title"
                }
            }
        });
    }
}
