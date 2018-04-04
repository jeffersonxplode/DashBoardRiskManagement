export class Risk {
  public severity: number;

  constructor(

    public id?: number,
    public name?: string,
    public description?: string,
    public probability_of_happen?: number,
    public impact?: number,
    public treatment?: string,
    public residual_risk?: string,
  ) {

    this.severity = probability_of_happen * impact;
  }

}
