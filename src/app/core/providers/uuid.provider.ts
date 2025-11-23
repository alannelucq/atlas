export abstract class UUIDProvider {
  abstract generate(): string;
}

export class SystemUUIDProvider extends UUIDProvider {
  override generate(): string {
    return crypto.randomUUID();
  }
}

export class FakeUUIDProvider extends UUIDProvider {
  uuid: string;

  withUuid(uuid: string) {
    this.uuid = uuid;
    return this;
  }

  override generate(): string {
    return this.uuid;
  }
}
