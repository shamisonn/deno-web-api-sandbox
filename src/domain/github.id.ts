export class GithubId {
  constructor(
    private readonly value: string,
  ) {}

  toValue(): string {
    return this.value;
  }

  isSame(id: GithubId): boolean {
    return this.toValue() === id.toValue();
  }
}
