import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cat.module';
import { EntryModule } from './entry/entry.module';
import { CatsController } from './cats/cats.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
// attempts one, two, and three
//import AutoIncrementFactory from 'mongoose-sequence';

// attempt four
import AutoIncrementFactory = require('mongoose-sequence');

const mongoUri = 'mongodb://localhost/nest';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri, {
      connectionName: 'scot',
      connectionFactory: (connection) => {
        // attempt one:
        // this errors out with:
        // Error: Please, pass mongoose while requiring mongoose-sequence: https://github.com/ramiel/mongoose-sequence
        // const sequence = require('mongoose-sequence');

        // attempt two:
        // const sequence = require('mongoose-sequence')(connection);
        // this errors with: RangeError: Maximum call stack size exceeded
        
        //attempt three and four:
        const AutoIncrement = AutoIncrementFactory(connection);
        connection.plugin(AutoIncrement, {inc_field: 'id'});
        return connection;
      }
    }),
    CatsModule,
    EntryModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
