import { RetentionPolicy, TRetentionPolicy } from './retentionPolicy';

export type TCompany = {
  id: string;
  policies: TRetentionPolicy[];
  typePolicy: RetentionPolicy;
};
