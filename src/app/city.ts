export class City {
    id?:number;
    name:string;
    temp:string;
    country:string;
    icon:string

    constructor(name:string,temp:string,country:string,icon:string){
        this.name = name;
        this.temp = temp;
        this.country = country;
        this.icon = icon;
    }
}
