import axios from '@/lib/axios';
import {
    queryListPath,
} from './api';

export const queryList = async (payload = {}): Promise<any> => {
    const response = await axios(queryListPath, payload, 'get');
    return response;
};
