import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Logger.debug(`--> ${user.roles}`);
    const userPermissions = context.getArgs()[0].user;
    Logger.debug(`getArgs[0] --> ${JSON.stringify(userPermissions)}`)
    
    // const a = {...request.user} ;
    Logger.debug(`Role xx--> ${request.user.role}`);
    Logger.debug(`request  --> ${request.constructor.name}`);
    Logger.debug(`User  --> ${request.authInfo}`);
;

    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}