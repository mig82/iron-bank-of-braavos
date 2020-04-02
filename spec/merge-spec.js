const merge = require("../src/merge")

describe("\tGiven a directory with one JSON file\n", () => {

	//beforeAll(() => {});
	//beforeEach(() => {});

	var dir = "tests/one"

	it( "\tWhen merge is invoked on the directory\n" +
		"\tThen the result is a JSON object where the only attribute is named after the file in the directory", async () => {

		var json = await merge(dir)
		expect(json).toEqual({
			foo: [
				{ id: 'foo1' },
				{ id: 'foo2' }
			]
		});
	});
});

describe("\tGiven a directory two or more JSON files\n", () => {

	//beforeAll(() => {});
	//beforeEach(() => {});

	var dir = "tests/two"

	it( "\tWhen merge is invoked on the directory\n" +
		"\tThen the result is a JSON object with one attribute named after each file in the directory", async () => {

		var json = await merge(dir)
		expect(json).toEqual({
			foo: [
				{ id: 'foo1' },
				{ id: 'foo2' }
			],
			bar: [
				{ id: 'bar1' },
				{ id: 'bar2' }
			]
		});
	});
});

describe("\tGiven a directory JSON files having a mix of arrays and objects\n", () => {

	//beforeAll(() => {});
	//beforeEach(() => {});

	var dir = "tests/three"

	it( "\tWhen merge is invoked on the directory\n" +
		"\tThen the result is a JSON object with one attribute named after each file in the directory", async () => {

		var json = await merge(dir)
		expect(json).toEqual({
			foo: [
				{ id: 'foo1' },
				{ id: 'foo2' }
			],
			bar: [
				{ id: 'bar1' },
				{ id: 'bar2' }
			],
			qux: { quxa: 'qux1', quxb: 'qux2' }
		});
	});
});
