import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';
import { SportsModule } from './sports/sports.module';
import { HobbiesModule } from './hobbies/hobbies.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CatsModule,
    SportsModule,
    HobbiesModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
class AppModule {}

export default AppModule;
