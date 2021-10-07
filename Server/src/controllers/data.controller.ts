import { Controller, Get, Param } from '@nestjs/common';
import { IDataResponse } from 'src/interfaces/data.response.interface';
import { DataService } from 'src/services/data.service';
import { AxiosResponse } from 'axios';
import { TransformResponse } from 'src/utils/transform-response';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('/:q')
  public async getData(
    @Param('q') q?: string,
  ): Promise<AxiosResponse<IDataResponse[]>> {
    const res = await this.dataService.queryData({ q });
    const transformedData = TransformResponse(res.data);
    return (transformedData as any) as AxiosResponse<IDataResponse[]>;
  }
}
