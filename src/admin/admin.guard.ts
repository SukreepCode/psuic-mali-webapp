import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {

  async canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();
    if (request['user'] === undefined) return false;
    const isAdmin = request['user'].admin as boolean;
    console.log('My user: ' + JSON.stringify(request['user']));
    console.log(`My auth: isAuthenticated(${request.isAuthenticated()}) isAdmin(${isAdmin})`);
    return request.isAuthenticated() && isAdmin;

  }

}
