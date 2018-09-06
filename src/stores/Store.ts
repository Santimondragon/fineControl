import {
    observable,
    action,
    computed
} from 'mobx';
import {
    setupMaster
} from 'cluster';

class Store {
    @observable email: string = "";
    @observable password: string = "";
    @observable errorLogin: boolean = false;
    @observable fineSelected: string[] = ["No hay multas", "", "", "unchecked"];
    @observable houseSelected: string[] = ["", ""];
    @observable fineList: string[] = ["No se aplicaron multas para este periodo"];
    @observable appliedDismissed: number = 0;
    @observable isAuth: boolean = false;
    @observable fines: any[] = [{
            house: "House 1",
            reason: "Uso indebido del Ascensor",
            date: "Ago 25 - 13:12",
            state: "Unchecked"
        },
        {
            house: "House 2",
            reason: "Alcohol en la piscina",
            date: "Ago 25 - 18:42",
            state: "Unchecked"
        },
        {
            house: "House 7",
            reason: "Daño a la propiedad",
            date: "Ago 26 - 14:59",
            state: "Unchecked"
        },
        {
            house: "House 12",
            reason: "Exceso de ruido",
            date: "Ago 27 - 2:23",
            state: "Unchecked"
        },
        {
            house: "House 8",
            reason: "Daño a la propiedad",
            date: "Ago 28 - 15:25",
            state: "Unchecked"
        },
        {
            house: "House 3",
            reason: "Exceso de ruido",
            date: "Ago 29 - 9:23",
            state: "Unchecked"
        },
        {
            house: "House 9",
            reason: "Demora en el pago",
            date: "Ago 30 - 17:24",
            state: "Unchecked"
        },
    ];

    @observable houses: any[] = [
        ["House 1", "inDebt"],
        ["House 2", "inDebt"],
        ["House 3", "inDebt"],
        ["House 4", "upToDate"],
        ["House 5", "upToDate"],
        ["House 6", "upToDate"],
        ["House 7", "inDebt"],
        ["House 8", "inDebt"],
        ["House 9", "inDebt"],
        ["House 10", "upToDate"],
        ["House 11", "upToDate"],
        ["House 12", "inDebt"],
    ];

    @action handleChangeEmail(newEmail: string) {
        this.email = newEmail;
    };

    @action handleChangePassword(newPass: string) {
        this.password = newPass;
    };

    @action viewDebtUpdate(str: string) {
        for (let i = 0; i < this.houses.length; i++) {
            if(str === this.houses[i][0]) {
                const toChange = this.houses[i].splice(1, 1, 'upToDate');
                console.log(toChange);
            }           
        }
    }

    @action register() {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
    };

    @action login() {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        localStorage.setItem('fineSelection', JSON.stringify(this.fineSelected));
        localStorage.setItem('houseSelection', JSON.stringify(this.houseSelected));
        localStorage.setItem('fineList', JSON.stringify(this.fineList));
        localStorage.setItem('fines', JSON.stringify(this.fines));
        this.appliedDismissed = this.fines.length;
        if(email === this.email && password === this.password){
            this.errorLogin = false;
            this.isAuth = true;
        } else {
            this.errorLogin = true;
        }
        
    };

    @action logOut(){
        this.isAuth = false;
    }

    @action onChangeFineSelected(newFineSelected: any) {
        this.fineSelected = newFineSelected;
        localStorage.setItem('fineSelection', JSON.stringify(newFineSelected));
    };

    @action onChangeHouseSelected(newHouseSelected: any) {
        this.houseSelected = newHouseSelected;
        localStorage.setItem('houseSelection', JSON.stringify(newHouseSelected));
        
    };

    @action onFineModified(num: number) {
        this.appliedDismissed = num;
        console.log(this.appliedDismissed);
    };

    @action onFineListModified(house: string){
        if(this.fineList[0] === "No se aplicaron multas para este periodo") {
            this.fineList[0] = house;
            console.log("primero")
        } else {
            this.fineList.push(house);
            console.log("segundo")
        }
    }
}

export const store = new Store();