# Learning NEST 

Current Error:

[Nest] 7284   - 07/16/2020, 12:02:35 PM   [NestFactory] Starting Nest application...
[Nest] 7284   - 07/16/2020, 12:02:35 PM   [InstanceLoader] MongooseModule dependencies initialized +18ms
[Nest] 7284   - 07/16/2020, 12:02:35 PM   [ExceptionHandler] Nest can't resolve dependencies of the CatModel (?). Please make sure that the argument DatabaseConnection at index [0] is available in the MongooseModule context.

Potential solutions:
- If DatabaseConnection is a provider, is it part of the current MongooseModule?
- If DatabaseConnection is exported from a separate @Module, is that module imported within MongooseModule?
  @Module({
    imports: [ /* the Module containing DatabaseConnection */ ]
  })
 +0ms
Error: Nest can't resolve dependencies of the CatModel (?). Please make sure that the argument DatabaseConnection at index [0] is available in the MongooseModule context.

Potential solutions:
- If DatabaseConnection is a provider, is it part of the current MongooseModule?
- If DatabaseConnection is exported from a separate @Module, is that module imported within MongooseModule?
  @Module({
    imports: [ /* the Module containing DatabaseConnection */ ]
  })

    at Injector.lookupComponentInParentModules (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:192:19)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Injector.resolveComponentInstance (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:148:33)
    at async resolveParam (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:102:38)
    at async Promise.all (index 0)
    at async Injector.resolveConstructorParams (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:117:27)
    at async Injector.loadInstance (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:81:9)
    at async Injector.loadProvider (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:38:9)
    at async Injector.lookupComponentInImports (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:224:17)
    at async Injector.lookupComponentInParentModules (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:190:33)
    at async Injector.resolveComponentInstance (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:148:33)
    at async resolveParam (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:102:38)
    at async Promise.all (index 0)
    at async Injector.resolveConstructorParams (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:117:27)
    at async Injector.loadInstance (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:81:9)
    at async Injector.loadProvider (/Users/tbruner/dev/s4n3/node_modules/@nestjs/core/injector/injector.js:38:9)
