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
    mounted() {
        this.queryList();
        console.log(this.me.name);
    }
    async queryList() {
        await queryList().then(res => {
            console.log('res', res);
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
        const { title, msg, count } = this;
        return <div class="index">
            <common-title title={title}></common-title>
            <p class="msg"><img class="time-img" src={timeImg}/>{msg}</p>
            <div class="btn" onClick={this.routerPushTest}>路由跳转测试页面</div>
            <div class="vuex-test">
                <p class="count">count: {count}</p>
                <div class="vuex-test-btn" onClick={this.onClickCountIncrement}>count +</div>
            </div>
        </div>;
    }
}
