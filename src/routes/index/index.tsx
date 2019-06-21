import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import CommonTitle from '@/components/CommonTitle/index.vue';
import { Me as GlobalMe } from '@/store/modules/global';
import { queryList } from '@/api/service';
import timeImg from '@/assets/img/time.png';
import '@/assets/style/index.scss';
import './index.scss';

const globalModule = namespace('global');

interface ListItem {
    id: number;
    name: string;
    user: string;
}

@Component({
    components: {
        CommonTitle,
    },
})
export default class Index extends Vue {
    @globalModule.State('count') count: number;
    @globalModule.State('me') me: GlobalMe;
    @globalModule.Action('increment') onIncrement: Function;
    title: string = '首页';
    msg: string = 'hello world';
    list: ListItem[] = [];
    mounted() {
        this.queryList();
        console.log(this.me.name);
    }
    async queryList() {
        await queryList().then(res => {
            if (res.success === 0) {
                this.list = res.data;
            }
        }).catch(err => {
            console.log('err', err);
        });
    }
    routerPushTest() {
        this.$router.push({ path: 'test', query: { name: 'axuebin' } });
    }
    onClickCountIncrement() {
        this.onIncrement();
    }
    render() {
        const { title, msg, count, list } = this;
        return <div class="index">
            <common-title title={title}></common-title>
            <p class="msg"><img class="time-img" src={timeImg}/>{msg}</p>
            <div class="btn" onClick={this.routerPushTest}>路由跳转测试页面</div>
            <div class="vuex-test">
                <p class="count">count: {count}</p>
                <div class="vuex-test-btn" onClick={this.onClickCountIncrement}>count +</div>
            </div>
            {
                list.length > 0
                    ? <div class="list">
                        {
                            list.map(item => <div class="list-item">
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <span>{item.user}</span>
                            </div>)
                        }
                    </div>
                    : ''
            }
        </div>;
    }
}
