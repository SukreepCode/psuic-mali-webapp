import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';

@Controller()
// @UseFilters(AuthExceptionFilter)
export class AppController {

  @Get('/')
  login(@Res() res) {
    // res.redirect('/auth/login');
    // return { name: ' thada'}
  }
  
  @Get('/app')
  getHome(@Request() req) {
    return { user: req.user };
  }

  @Get('/profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }


}
