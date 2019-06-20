import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '@/assets/style/index.scss';
import './index.scss';
import CommonTitle from '@/components/CommonTitle/index.vue';

@Component({
    components: {
        CommonTitle,
    },
})
export default class Index extends Vue {
    title: string = '首页';
    msg: string = 'hello world';
    mounted() {
    }
    routerPushTest() {
        this.$router.push({ path: 'test', query: { name: 'axuebin' } });
    }
    render() {
        const { title, msg } = this;
        return <div class="index">
            <common-title title={title}></common-title>
            <p class="msg">{msg}</p>
            <div class="btn" onClick={this.routerPushTest}>路由跳转测试页面</div>
        </div>;
    }
}
