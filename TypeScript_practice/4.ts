interface User {
    id: number;
    email: string;
}

interface AdminUser extends User {
    permissions: string[];
}

const admin: AdminUser = {id: 15546, email: "ashchurok@ventionteams.com", permissions: ["edit", "read", "delete"]};

console.log(admin);