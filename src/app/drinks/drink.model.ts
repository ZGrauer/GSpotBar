export class Drink {
    public name: string;
    public brewery: string;
    public type: string;
    public imagePath: string;
    public description: string;
    public abv: number;

    constructor(name: string, brewery: string, type: string, description:string, imagePath: string, abv: number) {
        this.name = name;
        this.brewery = brewery;
        this.type = type;
        this.description = description;
        this.imagePath = imagePath;
        this.abv = abv;
    }

}
