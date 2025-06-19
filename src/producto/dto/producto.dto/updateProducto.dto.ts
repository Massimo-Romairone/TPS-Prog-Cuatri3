import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductoDto {
    @IsOptional()
    @IsNumber()
    codigo_producto?: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    marca?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    descripcion?: string;

    @IsOptional()
    @IsNumber()
    precio?: number;

    @IsOptional()
    @IsNumber()
    stock?: number;
}
