import { AggregateRoot } from '@nestjs/cqrs';
import { TRetentionPolicy } from './retentionPolicy';

export type TReading = {
  id: ReadingId;
  timestamp: ReadingTimestamp;
  data: ReadingData;
  deviceId: ReadingDeviceId;
  readingTypeId: ReadingType;
  ownerOrganizationId: ReadingOwnerOrganizationId;
  expirated?: ReadingExpirate;
  expireAt?: ReadingExpirateAt;
  policy?: TRetentionPolicy;
  addPolicy?: (policy: TRetentionPolicy) => void;
};

export class Reading extends AggregateRoot implements TReading {
  policy: TRetentionPolicy;
  constructor(
    readonly id: ReadingId,
    readonly timestamp: ReadingTimestamp,
    readonly data: ReadingData,
    readonly deviceId: ReadingDeviceId,
    readonly readingTypeId: ReadingType,
    readonly ownerOrganizationId: ReadingOwnerOrganizationId,
  ) {
    super();
  }

  static create(reading: TReading) {
    const {
      id,
      timestamp,
      data,
      deviceId,
      readingTypeId,
      ownerOrganizationId,
    } = reading;

    return new Reading(
      id,
      timestamp,
      data,
      deviceId,
      readingTypeId,
      ownerOrganizationId,
    );
  }

  addPolicy(policy: TRetentionPolicy) {
    this.policy = policy;
  }
}

// valueObjects: encapsule validation logic
export class ReadingId {
  constructor(readonly value: string) {}
}

export class ReadingTimestamp {
  constructor(readonly value: string) {}
}

export class ReadingData {
  constructor(readonly value: string) {}
}

export class ReadingDeviceId {
  constructor(readonly value: string) {}
}

export class ReadingType {
  constructor(readonly value: string) {}
}

export class ReadingOwnerOrganizationId {
  constructor(readonly value: string) {}
}

export class ReadingExpirate {
  constructor(readonly value: boolean) {}
}

export class ReadingExpirateAt {
  constructor(readonly value: string) {}
}
