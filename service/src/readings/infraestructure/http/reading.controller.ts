import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateReadingDTO } from './dto/CreateReading.dto.request';
import { CommandBus } from '@nestjs/cqrs';
import {
  ReadingData,
  ReadingDeviceId,
  ReadingId,
  ReadingOwnerOrganizationId,
  ReadingTimestamp,
  ReadingType,
} from 'src/readings/domain/Reading';
import { CreateReadingCommand } from 'src/readings/application/commands/create.reading/CreateReading.command';

@Controller('readings')
export class ReadingController {
  constructor(private commandBus: CommandBus) {}
  @Post()
  async create(@Body() createReading: CreateReadingDTO): Promise<void> {
    const {
      id,
      timestamp,
      data,
      deviceId,
      readingTypeId: typeId,
      ownerOrganizationId,
    } = createReading;

    try {
      const readingId = new ReadingId(id);
      const readingTimestamp = new ReadingTimestamp(timestamp);
      const readingData = new ReadingData(data);
      const readingDeviceId = new ReadingDeviceId(deviceId);
      const readingTypeId = new ReadingType(typeId);
      const readingOwnerOrganizationId = new ReadingOwnerOrganizationId(
        ownerOrganizationId,
      );

      await this.commandBus.execute(
        new CreateReadingCommand(
          readingId,
          readingTimestamp,
          readingData,
          readingDeviceId,
          readingTypeId,
          readingOwnerOrganizationId,
        ),
      );
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST, {
        cause: new Error(error.message),
      });
    }
  }
}
