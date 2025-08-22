import {IsNotEmpty, IsEmail} from 'class-validator';

export class CreateUserDto {
        
    @IsNotEmpty({message: "O campo nome é obrigatório"})
    name: string;

    @IsEmail({}, {message: "O email precisa de um formato válido"})
    @IsNotEmpty({message: "O campo nome é obrigatório"})
    email: string;

}
