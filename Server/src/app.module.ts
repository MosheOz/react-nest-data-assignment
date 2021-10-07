import { Module } from '@nestjs/common';
import { DataController } from './controllers/data.controller';
import { DataService } from './services/data.service';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [DataService],
})
export class AppModule {}
