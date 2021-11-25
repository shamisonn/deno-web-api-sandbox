export class UserId {
  constructor(
    private readonly value: number,
  ) {}

  toValue(): number {
    return this.value;
  }
}
