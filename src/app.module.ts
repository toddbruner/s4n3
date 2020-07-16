import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cat.module';
import { CatsController } from './cats/cats.controller';

const mongoUri = 'mongodb://localhost/nest';
const mongoOptions = { 
  connectionName: 'cats',
};

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri, mongoOptions),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
