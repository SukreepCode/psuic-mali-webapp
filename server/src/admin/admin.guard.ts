import { ExecutionContext, Injectable, CanActivate, UnauthorizedException  } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') {

  constructor() {
    super();
  }


  /**
   * Re-implementation: https://github.com/nestjs/passport/blob/e4c642d3ab10c0797cafffa916908f2b95b5b7b9/lib/auth.guard.ts#L75
   */
  handleRequest(err, user, info, context, status) {

    /**
     * `user` is false, when token is invalid
     * `user` will be data { userId: undefined, username: 'admin@psu.ac.th' } when token is valid
     */
    //  How to get request : console.log(context.switchToHttp().getResponse());

    console.log(user);
    if (err || !user) {
      throw err || new UnauthorizedException();
    } 
    
    if(user.role !== 'admin') { 
      throw err || new UnauthorizedException();
    }
    return user;
  }


}
