import { expect, test } from "vitest";
import { createTestFS } from "../utilities/test/fs-test-utils";

test("insertion smoke test", async () => {
  const fs = await createTestFS(["/a/b/file1.txt", "/a/b/file2.txt", "/manifest.json"]);

  expect(fs.path).toBe("/");
  expect(fs.numFiles).toBe(3);
});

test("get file", async () => {
  const fs = await createTestFS(["/file1.txt", "/a/b/file2.txt", "/a/b/file3.txt"]);

  const file1 = fs.getFile("/file1.txt");
  expect(file1).toBeDefined();
  expect(file1.name).toBe("file1.txt");

  const abFiles = fs.getFiles("/a/b/*");
  expect(abFiles.length).toBe(2);
  expect(abFiles.includes(fs.getFile("/a/b/file2.txt")));

  expect(() => {
    fs.getFile("does/not/exist", true);
  }).toThrowError();
  expect(fs.getFile("does/not/exist", false)).not.toBeDefined();
});

test("folder contents should be sorted", async () => {
  const fs = await createTestFS(["/d.txt", "/b.txt", "/a.txt", "/c.txt"]);
  const children = [...fs.children.values()];
  expect(children[0].name).toBe("a.txt");
  expect(children[3].name).toBe("d.txt");
});
