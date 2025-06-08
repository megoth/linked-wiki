interface Point {
    line: number;
    column: number;
    offset?: number | undefined;
}

interface Position {
    start: Point;
    end: Point;
}

interface Node {
    type: string;
    data?: any;
    position?: Position | undefined;
}

interface Element extends Node {
    type: "element";
    tagName: string;
    properties?: { [key: string]: any };
    children: Array<Element | Text>;
}

interface Text extends Node {
    type: "text";
    value: string;
}

interface Root extends Node {
    children: Array<Element | Text>;
}

export type { Root, Text, Element };
