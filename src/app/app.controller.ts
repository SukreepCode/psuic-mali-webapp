import { Controller, Get, Post, Res, Render } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('/')
  @Render('login')
  index() {
    console.log('efef');
    return { message: 'hey '};
  }

  @Post('/login')
  login(@Res() res: Response): void {
    res.redirect('/home');
  }

  @Get('/home')
  @Render('home')
  getHome() {
    return;
  }

  @Get('/profile')
  @Render('profile')
  getProfile() {
    return;
  }

  @Get('/logout')
  logout(@Res() res: Response): void {
    res.redirect('/');
  }
}
