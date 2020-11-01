import { Injectable, Logger} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    handleRequest(err, user, info: Error) {
        // don't throw 401 error when unauthenticated
        Logger.debug(user);
        return user;
      }
    
}
