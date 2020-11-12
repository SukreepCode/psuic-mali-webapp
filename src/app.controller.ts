import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
// import { Response } from 'express';

import { LoginGuard } from './common/guards/login.guard';
import { IsAuthGuard } from './common/guards/auth.guard';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {

  @Get('/')
  // @Render('index')
  login(@Request() req, @Res() res) {
    if(req.isAuthenticated())
      res.redirect('/app');
    else
      res.redirect('/auth/login');
  }
  
  @UseGuards(IsAuthGuard)
  @Get('/app')
  @Render('evaluation/home')
  getHome(@Request() req) {
    return { user: req.user};
  }

  @UseGuards(IsAuthGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }


}
