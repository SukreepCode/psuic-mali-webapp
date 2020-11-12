import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { LoginGuard } from '../common/guards/login.guard';
import { AuthExceptionFilter } from '../common/filters/auth-exceptions.filter';

@Controller('auth')
@UseFilters(AuthExceptionFilter)
export class AuthController {
  
  @Get('/login')
  @Render('auth/login')
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

  @Get('/error')
  @Render('auth/error')
  error(@Request() req) {
    const errorMessage = req.flash('all_exception_message')[0];
    // console.log(errorMessage);
    return { ...errorMessage };
  }

}
