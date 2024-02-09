import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReadingDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'd56c7229-e260-41da-b742-593d20928b04' })
  id: string;

  @IsNotEmpty()
  @ApiProperty({ example: '2022-02-10 15:30:00' })
  timestamp: string;

  @IsNotEmpty()
  @ApiProperty({ example: '[VALUE]' })
  data: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '96246cac-6f17-4d49-89b1-1b521ff24a7c' })
  deviceId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '70a186e2-909c-49e2-868a-419d7f80bee0' })
  readingTypeId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '334fe6bd-a729-49a1-9d57-f99782da1c80' })
  ownerOrganizationId: string;
}
