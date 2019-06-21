import MockAdapter from 'axios-mock-adapter';
import { axiosIns } from '@/lib/axios';
import { queryListPath } from '@/api/api';
const mock = new MockAdapter(axiosIns);

mock.onGet(queryListPath).reply(200, {
    success: 0,
    data: [
        { id: 1, name: 'Vue 移动端单页面开发模板', user: 'axuebin' },
        { id: 2, name: 'typescipt vue 脚手架', user: 'xuebin' },
    ],
});
