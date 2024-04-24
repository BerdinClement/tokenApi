import { Injectable } from '@nestjs/common';
import * as process from 'process';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class IntrospectionService {
  constructor(private jwtService: JwtService) {}
  introspect(token: string) {
    if (!token) {
      throw new Error('No token provided');
    }
    const SECRET = Buffer.from(process.env.SECRET, 'base64');
    return this.jwtService.verify(token, {
      secret: SECRET,
    });
  }
}
