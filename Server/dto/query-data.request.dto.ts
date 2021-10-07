import { IsString, IsOptional } from 'class-validator';
export class QueryDataRequestDto {
  @IsString()
  @IsOptional()
  public q?: string;
}
