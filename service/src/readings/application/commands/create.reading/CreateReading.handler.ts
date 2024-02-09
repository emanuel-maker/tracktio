import { Inject, Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateReadingCommand } from './CreateReading.command';
import { InjectionToken } from '../../injection.token';
import TReadingRepository from 'src/readings/domain/Reading.repository';
import { Reading, TReading } from 'src/readings/domain/Reading';
import { FactoryRetentionPolicy } from 'src/readings/domain/Factories/FactoryRetentionPolicy';
import { TCompanyRepository } from 'src/readings/domain/Company.repository';

@CommandHandler(CreateReadingCommand)
export class CreateSongHandler
  implements ICommandHandler<CreateReadingCommand>
{
  constructor(
    @Inject(InjectionToken.TReadingRepository)
    private readonly readingRepository: TReadingRepository,
    @Inject(InjectionToken.TCompanyRepository)
    private readonly companyRepository: TCompanyRepository,
    private readonly logger: Logger,
  ) {}
  async execute(command: CreateReadingCommand) {
    const reading: TReading = Reading.create({ ...command });

    const company = await this.companyRepository.getCompanyByOwner({
      owner: command.ownerOrganizationId.value,
    });

    const factory = new FactoryRetentionPolicy();
    const policies = factory.generatePolicies(company.policies);

    for (const policy of policies) {
      policy.evaluate(reading);
    }

    await this.readingRepository.persist(reading);
    this.logger.log('🚀 ~ execute ~ reading:', reading);
  }
}
