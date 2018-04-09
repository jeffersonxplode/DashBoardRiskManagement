export class Risk {


  constructor(

    public id?: number,
    public name?: string,
    public description?: string,
    public probability_of_happen?: number,
    public impact?: number,
    public treatment?: string,
    public category?: string,
    public severity?: number,
    public severity_str?: string,
    public residual_risk?: string,
    public occurrences?: number

    ) {}
}
