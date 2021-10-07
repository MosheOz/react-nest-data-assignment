import { IDataResponse } from 'src/interfaces/data.response.interface';
import { DataService } from 'src/services/data.service';
export declare class DuckController {
    private dataService;
    constructor(dataService: DataService);
    getData(q?: string): Promise<IDataResponse>;
}
