import { Controller, Get, Post, Res, Render, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { AdminGuard } from './admin.guard';

@UseGuards(AdminGuard)
@Controller('admin')
export class AdminController {

    @Get('/')
    @Render('admin/home')
    login(@Request() req) {
        return { user: req.user};
    }
    
}
