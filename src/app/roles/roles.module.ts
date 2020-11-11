import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
