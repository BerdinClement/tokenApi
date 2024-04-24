import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { IntrospectionService } from './introspection.service';

@Controller('introspection')
export class IntrospectionController {
  constructor(private introspectionService: IntrospectionService) {}
  @Get(':token')
  introspect(@Param() params: any) {
    try {
      return this.introspectionService.introspect(params.token);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
