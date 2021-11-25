export class TwitterId {
  constructor(
    private readonly value: string,
  ) {}

  toValue(): string {
    return this.value;
  }
}
