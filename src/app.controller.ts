import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { LoginGuard } from './common/guards/login.guard';
import { IsAuthGuard } from './common/guards/auth.guard';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {

  @Get('/')
  @Render('index')
  login(@Res() res) {
    res.redirect('/auth/login');
    // return { name: ' thada'}
  }
  
  @UseGuards(IsAuthGuard)
  @Get('/app')
  @Render('evaluation/index')
  getHome(@Request() req) {
    return { user: req.user };
  }

  @UseGuards(IsAuthGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }


}
