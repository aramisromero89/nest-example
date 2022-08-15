import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core/dist/plugin';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => ({
        playground: false,
        autoSchemaFile: 'schema.gql',
        plugins: [
          ...(configService.get<boolean>("DEV_MODE", false) ?
            [ApolloServerPluginLandingPageLocalDefault()] : [])
        ],
      }),
      inject: [ConfigService],      
    }),
    AuthModule,
  ],
  providers: [
    AppResolver
  ]
})
export class AppModule { }


