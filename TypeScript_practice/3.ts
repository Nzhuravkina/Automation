interface Address {
    street: string;
    state: "MN" | "NY" | "CA" | "CO" | "FL";
    zipcode: string;
    city: string;
}

const addresses: Address[] = [
    {street: "Apple street", state: "MN", zipcode: "01125", city: "Minneapolis"}, 
    {street: "Orange street", state: "NY", zipcode: "22698", city: "New York"}
]

console.log(addresses);