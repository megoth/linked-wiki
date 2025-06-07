import {visit} from 'unist-util-visit'
import {Element, Root} from "./types";

interface Options {
    elements?: string[]
}

export default function rehypeTitleIds(options: Options = {}) {
    const {elements = ["h2", "h3", "h4", "h5", "h6"]} = options;
    return (tree: Root): void => {
        visit(tree, "element", (element: Element) => {
            if (elements.includes(element.tagName)) {
                element.properties = {
                    ...element.properties,
                    id: createId(element)
                }
            }
        });
    }
}

function createId(node: Element): string {
    return (
        Array.prototype.slice.call(node.children)
            .filter((child) => child.type === "text")
            .map((child: any) => child.value.replace(/\s+/g, "-").toLowerCase())
            .join("")
    );
}