import { Controller } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

// TODO investigating Prisma doesn't directly work with OpanAPI, it requires a DTO
export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
@Controller()
export class AppController {}
