import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CatsController from './cats/cats.controller';
import { AppResolver } from './app.resolver';
import { join } from 'path';
import { CatsResolver } from './cats/cats.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, AppResolver, CatsResolver],
})
class AppModule {}

export default AppModule;
