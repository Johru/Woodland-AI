// app.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AIService {
  async postData(data: any): Promise<any> {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.DB_JWT}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      'https://app.tabidoo.cloud/app/woodlandai/schema/ai_profiles',
      data,
      config
    );
    return response.data;
  }
}
