import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntrospectionModule } from './introspection/introspection.module';

@Module({
  imports: [IntrospectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
