import { FSFile, FSFolder, type FSNode } from "./FileSystem";

export function move(root: FSFolder, currentPosition: string, key: KeyboardEvent["key"]): FSNode {
    const currentNode = root.getNode(currentPosition);

    if (!currentNode) {
        throw new Error(`[FSCursor] File "${currentPosition}" not found.`);
    }

    if (key === "ArrowLeft") {
        const nextNode = currentNode.parent;
        if (!nextNode?.parent) {
            // Root node should not be selected.
            return currentNode;
        }
        return nextNode;
    }

    if (key === "ArrowRight" && currentNode instanceof FSFile) {
        return currentNode;
    }

    if (key === "ArrowRight" && currentNode instanceof FSFolder) {
        // Folders are never empty so a child should always exist.
        const firstChild = currentNode.children.values().next().value;
        return firstChild;
    }

    if (key !== "ArrowUp" && key !== "ArrowDown") {
        throw new Error(`[FSCursor] Unhandled key: "${key}"`);
    }

    // Traverse tree up & down.

    const direction = key === "ArrowDown" ? 1 : -1;
    let current = currentNode;
    let nextCandidate: FSNode | null = null;

    // Move up to the correct list of siblings.
    while (true) {
        const siblings = Array.from(current.parent?.children?.values() ?? []);
        const currentIndex = siblings.indexOf(current);
        if (currentIndex === 0 || currentIndex === siblings.length-1) {
            if (current.parent === undefined) {
                // Reached the root node, cannot move up or down.
                return currentNode;
            }
            current = current.parent;
            continue;
        }
        nextCandidate = siblings[currentIndex + direction];
        break;
    }

    // Move down to the correct node which is visually next to currentNode.
    while (nextCandidate instanceof FSFolder) {
        // Folders are never empty (!)
        if (key === "ArrowDown") {
            nextCandidate = [...nextCandidate.children.values()].at(0)!;
        } else {
            nextCandidate = [...nextCandidate.children.values()].at(-1)!;
        }
    }

    return nextCandidate;
}
