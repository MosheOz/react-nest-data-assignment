import { QueryDataRequestDto } from 'src/dto/query-data.request.dto';
import { AxiosResponse } from 'axios';
export declare class DataService {
    API: string;
    queryData(queryDataDto: QueryDataRequestDto): Promise<AxiosResponse<any>>;
}
