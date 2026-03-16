type State = "MN" | "NY" | "CA" | "CO" | "FL";

interface Address {
    street: string;
    state: State;
    zipcode: string;
    city: string;
}

const addresses: Address[] = [
    {street: "Apple street", state: "MN", zipcode: "01125", city: "Minneapolis"}, 
    {street: "Orange street", state: "NY", zipcode: "22698", city: "New York"}
]

console.log(addresses);