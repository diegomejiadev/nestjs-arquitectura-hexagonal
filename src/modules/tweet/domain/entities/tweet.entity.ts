export class TweetEntity {
  private id: string;
  private content: string;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): this {
    this.id = id;
    return this;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): this {
    this.content = content;
    return this;
  }
}
