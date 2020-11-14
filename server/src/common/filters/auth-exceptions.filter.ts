import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  @Catch(HttpException)
  export class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      
      throw exception;
      // if (!exception) {
      //   throw new UnauthorizedException("Username or password is incorrect");
      // }
      // if (
      //   exception instanceof UnauthorizedException ||
      //   exception instanceof ForbiddenException
      // ) {
      //   request.flash('loginError', 'Please try again!');
      //   response.redirect('/');
      // } else {
      //   response.redirect('/error');
      // }
    }
  }