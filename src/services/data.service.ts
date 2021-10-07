import { Injectable } from '@nestjs/common';
import { QueryDataRequestDto } from 'src/dto/query-data.request.dto';
import { AxiosResponse } from 'axios';
import { IDataResponse } from 'src/interfaces/data.response.interface';
import axios from 'axios';

@Injectable()
export class DataService {
  API = 'http://api.duckduckgo.com/';

  public async queryData(
    queryDataDto: QueryDataRequestDto,
  ): Promise<AxiosResponse<any>> {
    console.log(queryDataDto);
    const { q } = queryDataDto;

    return await axios.get(`${this.API}?q=${q}&format=json`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      },
    });
  }
}
