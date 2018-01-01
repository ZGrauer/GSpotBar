export class Drink {
    public name: string;
    public type: string;
    public imagePath: string;
    public description: string;

    constructor(name: string, type: string, imagePath: string, description:string) {
        this.name = name;
        this.type = type;
        this.imagePath = imagePath;
        this.description = description;
    }

}
