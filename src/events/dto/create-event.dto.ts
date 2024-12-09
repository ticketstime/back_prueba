import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ example: 'Concierto pro fondo' })
  @IsString()
  name: string;

  @ApiProperty({ example: '' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 'https://www.example.com/files/image.png' })
  @IsString()
  cover: string;
}
