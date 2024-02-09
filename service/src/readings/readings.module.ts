import { Logger, Module } from '@nestjs/common';
import { ReadingController } from './infraestructure/http/reading.controller';
import { ReadingRepository } from './infraestructure/postgresql/reading.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CompanyRepository } from './infraestructure/postgresql/company.repository';

@Module({
  imports: [CqrsModule],

  controllers: [ReadingController],
  providers: [
    Logger,
    {
      provide: 'TReadingRepository',
      useClass: ReadingRepository,
    },
    {
      provide: 'TCompanyRepository',
      useClass: CompanyRepository,
    },
  ],
  exports: [],
})
export class ReadingsModule {}
