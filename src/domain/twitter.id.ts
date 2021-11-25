export class TwitterId {
  constructor(
    private readonly value: string,
  ) {}

  toValue(): string {
    return this.value;
  }

  isSame(id: TwitterId): boolean {
    return this.toValue() === id.toValue();
  }
}
