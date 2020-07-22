
S4N3

A learning experiment.  Current problem:

I wish to use the mongoose-sequence plugin so that all my collections have an id field that is an autoincremented integer.

According to https://docs.nestjs.com/techniques/mongodb#plugins, I can do this with: 

```
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),
  ],
})
export class AppModule {}
```

However, mongoose-sequence, needs a mongoose connection to initialize.  From it's documentation: https://www.npmjs.com/package/mongoose-sequence

```
const mongoose = require('mongoose')
const AutoIncrementFactory = require('mongoose-sequence');

const connection = await mongoose.createConnection('mongodb://...');

const AutoIncrement = AutoIncrementFactory(connection);
```

So attempt three errors with the following trace:

```
[4:08:24 PM] Found 0 errors. Watching for file changes.

[Nest] 24140   - 07/20/2020, 4:08:24 PM   [NestFactory] Starting Nest application...
[Nest] 24140   - 07/20/2020, 4:08:24 PM   [MongooseModule] Unable to connect to the database. Retrying (1)... +27ms
[Nest] 24140   - 07/20/2020, 4:08:24 PM   [InstanceLoader] MongooseModule dependencies initialized +1ms
[Nest] 24140   - 07/20/2020, 4:08:24 PM   [InstanceLoader] AuthModule dependencies initialized +0ms
[Nest] 24140   - 07/20/2020, 4:08:24 PM   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 24140   - 07/20/2020, 4:08:27 PM   [MongooseModule] Unable to connect to the database. Retrying (2)... +3004ms
[Nest] 24140   - 07/20/2020, 4:08:30 PM   [MongooseModule] Unable to connect to the database. Retrying (3)... +3003ms
[Nest] 24140   - 07/20/2020, 4:08:33 PM   [MongooseModule] Unable to connect to the database. Retrying (4)... +3008ms
[Nest] 24140   - 07/20/2020, 4:08:36 PM   [MongooseModule] Unable to connect to the database. Retrying (5)... +3005ms
[Nest] 24140   - 07/20/2020, 4:08:39 PM   [MongooseModule] Unable to connect to the database. Retrying (6)... +3005ms
[Nest] 24140   - 07/20/2020, 4:08:42 PM   [MongooseModule] Unable to connect to the database. Retrying (7)... +3003ms
[Nest] 24140   - 07/20/2020, 4:08:45 PM   [MongooseModule] Unable to connect to the database. Retrying (8)... +3005ms
[Nest] 24140   - 07/20/2020, 4:08:48 PM   [MongooseModule] Unable to connect to the database. Retrying (9)... +3004ms
[Nest] 24140   - 07/20/2020, 4:08:48 PM   [ExceptionHandler] mongoose_sequence_1.default is not a function +1ms
TypeError: mongoose_sequence_1.default is not a function
    at connectionFactory (/Users/tbruner/dev/s4n3/dist/app.module.js:28:70)
    at Function.<anonymous> (/Users/tbruner/dev/s4n3/node_modules/@nestjs/mongoose/dist/mongoose-core.module.js:59:28)
    at Generator.next (<anonymous>)
    at /Users/tbruner/dev/s4n3/node_modules/@nestjs/mongoose/dist/mongoose-core.module.js:20:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/tbruner/dev/s4n3/node_modules/@nestjs/mongoose/dist/mongoose-core.module.js:16:12)
    at /Users/tbruner/dev/s4n3/node_modules/@nestjs/mongoose/dist/mongoose-core.module.js:58:49
    at Observable._subscribe (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/observable/defer.js:10:21)
    at Observable._trySubscribe (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/Observable.js:44:25)
    at Observable.subscribe (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/Observable.js:30:22)
    at RetryWhenSubscriber.notifyNext (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/operators/retryWhen.js:85:21)
    at InnerSubscriber._next (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/InnerSubscriber.js:28:21)
    at InnerSubscriber.Subscriber.next (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/Subscriber.js:66:18)
    at Notification.observe (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/Notification.js:22:50)
    at AsyncAction.DelaySubscriber.dispatch (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/operators/delay.js:54:40)
    at AsyncAction._execute (/Users/tbruner/dev/s4n3/node_modules/rxjs/internal/scheduler/AsyncAction.js:71:18)
```

Attempt four:

 Found 0 errors. Watching for file changes.

[Nest] 32041   - 07/22/2020, 11:37:00 AM   [NestFactory] Starting Nest application...
[Nest] 32041   - 07/22/2020, 11:37:00 AM   [InstanceLoader] MongooseModule dependencies initialized +23ms
[Nest] 32041   - 07/22/2020, 11:37:00 AM   [InstanceLoader] AuthModule dependencies initialized +0ms
[Nest] 32041   - 07/22/2020, 11:37:00 AM   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 32041   - 07/22/2020, 11:37:00 AM   [InstanceLoader] MongooseCoreModule dependencies initialized +8ms
[Nest] 32041   - 07/22/2020, 11:37:00 AM   [ExceptionHandler] Maximum call stack size exceeded +182ms
RangeError: Maximum call stack size exceeded
    at Set.has (<anonymous>)
    at cloneObject (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/helpers/clone.js:109:27)
    at clone (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/helpers/clone.js:53:16)
    at new SchemaTypeOptions (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/options/SchemaTypeOptions.js:22:25)
    at new SchemaStringOptions (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/options/SchemaStringOptions.js:18:1)
    at SchemaString.SchemaType (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schematype.js:63:18)
    at new SchemaString (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema/string.js:30:14)
    at Schema.interpretAsType (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:993:10)
    at Schema.path (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:680:27)
    at Schema.add (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:519:14)
    at new Schema (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:130:10)
    at Mongoose.Schema (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:95:12)
    at SequenceFactory.Sequence._createCounterModel (/Users/tbruner/dev/s4n3/node_modules/mongoose-sequence/lib/sequence.js:170:36)
    at SequenceFactory.Sequence.enable (/Users/tbruner/dev/s4n3/node_modules/mongoose-sequence/lib/sequence.js:103:31)
    at SequenceFactory.Sequence.getInstance (/Users/tbruner/dev/s4n3/node_modules/mongoose-sequence/lib/sequence.js:92:14)
    at Schema.plugin (/Users/tbruner/dev/s4n3/node_modules/mongoose/lib/schema.js:1500:3)


