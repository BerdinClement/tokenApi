import { Module } from '@nestjs/common';
import { IntrospectionService } from './introspection.service';
import { IntrospectionController } from './introspection.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [IntrospectionService],
  controllers: [IntrospectionController]
})
export class IntrospectionModule {}
