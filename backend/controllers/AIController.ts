import { Controller, Post, Body } from '@nestjs/common';
import { AIService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly aiService: AIService) {}

  @Post('postdata')
  postData(@Body() data: any): Promise<any> {
    return this.aiService.postData(data);
  }
}
