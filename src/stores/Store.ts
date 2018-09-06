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
        ["House 1", "Al día"],
        ["House 2", "Al día"],
        ["House 3", "Al día"],
        ["House 4", "Al día"],
        ["House 5", "Al día"],
        ["House 6", "Al día"],
        ["House 7", "Al día"],
        ["House 8", "Al día"],
        ["House 9", "Al día"],
        ["House 10", "Al día"],
        ["House 11", "Al día"],
        ["House 12", "Al día"],
    ];

    @action handleChangeEmail(newEmail: string) {
        this.email = newEmail;
    };

    @action handleChangePassword(newPass: string) {
        this.password = newPass;
    };

    @action accountVerification() {

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