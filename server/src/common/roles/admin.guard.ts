import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    
    const request = context.switchToHttp().getRequest();
    // const user = request.user;
    
    // Logger.debug(`Role xx--> ${request.user.role}`);
    // Logger.debug(`User xx --> ${request.user}`);

    // const hasRole = 
    

    // return user && user.roles && hasRole();
    return true;
  }
}