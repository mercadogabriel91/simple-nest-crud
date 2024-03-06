import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// Configs
import getServerConfig from './serverConfig';

@Module({
  // imports: [UserModule],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getServerConfig()),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
