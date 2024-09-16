import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-secret-key', // Certifique-se de usar a mesma chave que está no `auth.module.ts`
    });
  }

  // Função que valida o token e retorna o payload do token
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
