interface ConsumerProfile {
    id: number;
    fullName: string;
    email: string;
}

interface PartnerProfile extends ConsumerProfile {
    companyName: string;
}

class Consumer {
    protected id: number;
    protected email: string;
    protected firstName: string;
    protected lastName: string;

    constructor(id: number, email: string, firstName: string, lastName: string) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    private getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getConsumerProfile(): ConsumerProfile {
        return {id: this.id, fullName: this.getFullName(), email: this.email};
    }
}

class Partner extends Consumer {
    protected companyName: string;

    constructor(id: number,email: string,firstName: string,lastName: string,companyName: string) {
        super(id, email, firstName, lastName);
        this.companyName = companyName;
    }

    getPartnerProfile(): PartnerProfile {
        return {...this.getConsumerProfile(), companyName: this.companyName};
    }
}

const consumer1 = new Consumer(456, "Ana@test.test", "Anastasiya", "Shchurok");
const partner1 = new Partner(889, "AnaPartner@test.test", "Ana", "SH", "iTechArt");

console.log(consumer1.getConsumerProfile());
console.log(partner1.getPartnerProfile());