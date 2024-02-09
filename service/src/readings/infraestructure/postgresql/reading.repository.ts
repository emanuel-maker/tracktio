import { Injectable, Logger } from '@nestjs/common';
import { TReading } from 'src/readings/domain/Reading';
import TReadingController from 'src/readings/domain/Reading.repository';

@Injectable()
export class ReadingRepository implements TReadingController {
  constructor(private readonly logger: Logger) {}
  async persist(reading: TReading): Promise<void> {
    this.logger.log('🚀 ~ SongRepository ~ persist ~ song:', reading);
    return;
  }
}
