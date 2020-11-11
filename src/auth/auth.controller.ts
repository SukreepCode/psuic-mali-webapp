import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { LoginGuard } from '../common/guards/login.guard';
import { AuthGuard } from '../common/guards/auth.guard';
import { AuthExceptionFilter } from '../common/filters/auth-exceptions.filter';

@Controller('auth')
@UseFilters(AuthExceptionFilter)
export class AuthController {
  
  @Get('/login')
  @Render('login')
  index(@Request() req): { message: string, loginSubmitRoute: string } {
    return { message: req.flash('loginError'), loginSubmitRoute: '/auth/login'  };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/app');
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
