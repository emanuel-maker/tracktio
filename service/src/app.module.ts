import { Module } from '@nestjs/common';
import { ReadingsModule } from './readings/readings.module';

@Module({
  imports: [ReadingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
