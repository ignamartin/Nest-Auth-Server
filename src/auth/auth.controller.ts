import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDtoSignin, AuthDtoSignup } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDtoSignup) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDtoSignin) {
    return this.authService.signin(dto);
  }
}
