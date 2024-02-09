import { Injectable, Logger } from '@nestjs/common';
import { TCompany } from 'src/readings/domain/Company';
import { TCompanyRepository } from 'src/readings/domain/Company.repository';
import {
  RetentionId,
  RetentionPolicy,
} from 'src/readings/domain/retentionPolicy';

@Injectable()
export class CompanyRepository implements TCompanyRepository {
  constructor(private readonly logger: Logger) {}
  getCompanyByOwner({ owner }: { owner: string }): Promise<TCompany> {
    this.logger.log(
      '🚀 ~ CompanyRepository ~ getCompanyByOwner ~ owner:',
      owner,
    );
    return Promise.resolve({
      id: '23a55ee4-e806-45e4-882d-264ec897c212',
      policies: [
        {
          id: new RetentionId('66cd0926-62b3-4196-be75-87cbe566210b'),
          type: 'retentionDeviceIdPolicy' as RetentionPolicy,
          deviceValue: 'Android',
          time: 40,
          timeUnit: 'day',
        },
        {
          id: new RetentionId('66cd0926-62b3-4196-be75-87cbe566210b'),
          type: 'retentionDeviceIdPolicy' as RetentionPolicy,
          deviceValue: 'IPhone',
          time: 40,
          timeUnit: 'minute',
        },
      ],
      typePolicy: 'retentionDeviceIdPolicy' as RetentionPolicy,
    });
  }
}
