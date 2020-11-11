import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AdminGuard implements CanActivate {
    
  constructor(private usersSerivce: UsersService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    return request.isAuthenticated();
  }
}
