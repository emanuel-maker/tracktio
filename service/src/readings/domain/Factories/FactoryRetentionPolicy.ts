import {
  RetentioOwnerPolicy,
  RetentionDeviceId,
  RetentionDeviceIdPolicy,
  RetentionId,
  RetentionPolicy,
  TRetentionPolicy,
} from '../retentionPolicy';

type TFactoryRetentionPolicy = {
  create: (policy: TRetentionPolicy) => void;
  generatePolicies: (policies: TRetentionPolicy[]) => TRetentionPolicy[];
};

export class FactoryRetentionPolicy implements TFactoryRetentionPolicy {
  create(policy: any) {
    if (policy.type === RetentionPolicy.OWNER) {
      return new RetentioOwnerPolicy(new RetentionId(policy.id.value));
    }

    if (policy.type === RetentionPolicy.DEVICE_ID) {
      return new RetentionDeviceIdPolicy(
        new RetentionId(policy.id.value),
        new RetentionDeviceId(policy.deviceId.value),
      );
    }
  }

  generatePolicies(policies: any[]) {
    const instances = policies.map((policy) => {
      return this.create(policy);
    });

    return instances;
  }
}
