import {Injectable, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import {UserService} from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {
    }

    async signIn(userName: string, pass: string): Promise<any> {
        const user = await this.usersService.findUser(userName);
        if (user && bcrypt.compareSync(pass, user.passwordHash)) {
            const payload = {username: user.userName, sub: user._id};
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        } else throw new UnauthorizedException();
    }
}
