import { IDataResponse } from 'src/interfaces/data.response.interface';
import { DataService } from 'src/services/data.service';
import { AxiosResponse } from 'axios';
export declare class DataController {
    private dataService;
    constructor(dataService: DataService);
    getData(q?: string): Promise<AxiosResponse<IDataResponse[]>>;
}
