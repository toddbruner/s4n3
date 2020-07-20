
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

So my latest attempt errors with the following trace:

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


