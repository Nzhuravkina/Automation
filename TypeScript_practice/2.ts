// Variables
const time: string = '18:30';

const numbers: number[] = [1, 2, 3, 4, 5];

interface MyResponse { // I had an issue with Response name. Let's discuss
    readonly status: number; // I had an issue with status name. Let's discuss
    description: string;
}

const response: MyResponse = { status: 404, description: 'Not Found' };

const strings: string[] = [
	'When I was a young boy', 
	'My father took me into the city', 
	'To see a marching band'
];

interface TestCases {
    id: number;
    description: string;
    expectedData?: { cost: 50000 };
}
const testCases = [
  { id: 1, description: 'Verify that header is shown' },
  { id: 2, description: 'Verify that cost is shown correctly', expectedData: { cost: 50000 } },
  { id: 3, description: 'Verify that footer is shown' },
]

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const httpMethod: HttpMethod = 'GET'; // it should be a literal that can accept only the most basic HTTP methods

const httpMethods: HttpMethod[] = ['GET', 'POST', 'GET', 'PUT']; //This one no needed as we made a type?



// Functions
function greet(name: string): string {
  return `Hello ${name}`;
}

const isPositive = (num: number): boolean => num > 0;

const stripNonDigits = function(variable: string | boolean | number): string {
  // It is expected that this function can accept strings, booleans and numbers only
  return typeof variable === 'string' ? variable.replace(/[^0-9.]/g, '') : String(variable);
}