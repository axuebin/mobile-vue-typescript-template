import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import CommonTitle from '@/components/CommonTitle/index.vue';
import { qs } from '@/lib/utils';
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
    title: string = '测试';
    msg: string = 'hello world';
    mounted() {
        console.log(qs());
    }
    routerPushTest() {
        this.$router.push('/');
    }
    render() {
        const { title, msg, count } = this;
        return <div class="test">
            <common-title title={title}></common-title>
            <p class="msg">{msg}</p>
            <div class="btn" onClick={this.routerPushTest}>路由跳转首页</div>
            <div class="vuex-test">
                <p class="count">count: {count}</p>
            </div>
        </div>;
    }
}
