const { generateText } = require("./util");

test("Output must be a name or and age", () => {
  const text = generateText("John", 30);
  expect(text).toBe("John (30 years old)");
  
});
