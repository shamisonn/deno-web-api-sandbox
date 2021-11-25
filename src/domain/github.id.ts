export class GithubId {
  constructor(
    private readonly value: string,
  ) {}

  toValue(): string {
    return this.value;
  }
}
