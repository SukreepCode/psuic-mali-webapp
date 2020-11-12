import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception.message;

    if( !(exception instanceof HttpException)){
        console.log(exception);
    }
      
    const errorMessage = {
      statusCode: status,
      path: request.url,
      timestamp: new Date().toISOString(),
      message: exception.message,
      stack: exception.stack,
    };
    request.flash('all_exception_message', errorMessage );
    response.redirect('/auth/error');
    
  }
}