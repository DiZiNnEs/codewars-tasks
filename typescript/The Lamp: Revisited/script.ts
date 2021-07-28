export class Lamp {
  public color: string;
  public on: boolean = false;

  constructor(color: string) {
    this.color = color;
  }

  state() {
    return this.on === false ? 'The lamp is off.' : 'The lamp is on.'
  }

  toggleSwitch() {
    this.on === false ? this.on = true : this.on = false
  }
}
