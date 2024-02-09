import { TReading } from './Reading';

export class RetentionDeviceIdPolicy implements TRetentionPolicy {
  constructor(readonly id: RetentionId, readonly deviceId: RetentionDeviceId) {}

  evaluate(reading: TReading) {
    if (reading.deviceId.value === this.deviceId.value) {
      reading.addPolicy(this);
    }
  }
}

export class RetentioOwnerPolicy implements TRetentionPolicy {
  constructor(readonly id: RetentionId) {}
  evaluate(reading: TReading) {
    console.log('🚀 ~ RetentioOwnerPolicy ~ evaluate ~ reading:', reading);
    // logic OwnerPolicy
  }
}

export type TRetentionPolicy = {
  id: RetentionId;
  type?: RetentionPolicy;
  evaluate?: (reading: TReading) => void;
};

export class RetentionId {
  constructor(readonly value: string) {}
}

export class RetentionDeviceId {
  constructor(readonly value: string) {}
}

export enum RetentionPolicy {
  DEVICE_ID = 'retentionDeviceIdPolicy',
  OWNER = 'retentioOwnerPolicy',
}
