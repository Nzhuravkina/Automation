//a task
// Just a function that returns a random `a`, `b`, or `c` object.
const randomObject = (): { a?: number, b?: number, c?: number } => {
  if (Math.random() > 0.7) { return { a: Math.random() } } 
  else if (Math.random() < 0.3) { return { b: Math.random() } } 
  else { return { c: Math.random() } }
};

interface RequestData {
    method: 'GET' | 'POST';
}

interface ReturnObject {
    status: 200 | 400;
    data?: {a?: number, b?: number, c?: number}
}

function sendRequest(data: RequestData): ReturnObject {
  if (data.method === 'GET' || data.method === 'POST') { // Do we need this check any more? As our interface guarantees that method will be Get or Post
    return { status: 200, data: randomObject() };
  }
  return { status: 400 };
}

//b task
interface Loan {
    cost: number;
    rebate: number;
    downPayment: number;
}

function calculateLoan(data: Loan) {}
function validateLoan(data: Loan) {}

//c task
function formatValue(value: string | number): string { //toFixed() always returns a string
  if (typeof value === "string") {
    value = Number(value);
    if (Number.isNaN(value)) {
        throw new Error ("Value is not a number");
    }
  }
    return value.toFixed(2);
}