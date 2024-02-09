import { ICommand } from '@nestjs/cqrs';
import {
  ReadingData,
  ReadingDeviceId,
  ReadingId,
  ReadingOwnerOrganizationId,
  ReadingType,
  ReadingTimestamp,
} from 'src/readings/domain/Reading';

export class CreateReadingCommand implements ICommand {
  constructor(
    readonly id: ReadingId,
    readonly timestamp: ReadingTimestamp,
    readonly data: ReadingData,
    readonly deviceId: ReadingDeviceId,
    readonly readingTypeId: ReadingType,
    readonly ownerOrganizationId: ReadingOwnerOrganizationId,
  ) {}
}
