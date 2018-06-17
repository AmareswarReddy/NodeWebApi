import { Controller, Get, PathParams, Authenticated, Required, Req } from 'ts-express-decorators';
import { Returns } from 'ts-express-decorators/lib/swagger';
import { User } from '../../dal/User';
import { UserService } from '../../services/user/user.service';
import { IAppRequest } from '../../types/app.types';

@Controller('/test')
export class UserController {
    constructor(
        private userService: UserService
    ) {

    }

    // @Get('/:id([0-9a-f]{24})')
    // @Returns(User)
    // async getUser(@Required() @PathParams('id') id: string): Promise<User> {
    //     return await this.userService.getUserById(id);
    // }

    @Get('/test')
    async simpleTest(@Req() req: IAppRequest): Promise<string> {
        
        return `hello`;
    }
}