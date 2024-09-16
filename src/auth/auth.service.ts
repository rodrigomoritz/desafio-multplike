import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Função para validar usuário (simulação)
  async validateUser(username: string, password: string): Promise<any> {
    const user = {
      id: 1,
      username: 'test',
      password: await bcrypt.hash('123456', 10),
    }; // Simula um usuário com senha criptografada

    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Função para fazer login e gerar o token JWT
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
