import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { jwtConstants } from '../constant';

import { UsersService } from '../../admin/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    let user: any;
    try{
      user = await this.usersService.findByUsername(payload.username);
    } catch(err){
      Logger.error(err);
    }
    return { username: payload.username, role: user.role};
  }
}