function testGenerics<T>(string: T): void {
  console.log(string);
}

testGenerics<string>('Hello, world.');
