import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CommonTitle from '@/components/CommonTitle/index.vue';
import { qs } from '@/lib/utils';
import '@/assets/style/index.scss';
import './index.scss';

@Component({
    components: {
        CommonTitle,
    },
})
export default class Index extends Vue {
    title: string = '测试';
    msg: string = 'hello world';
    mounted() {
        console.log(qs());
    }
    routerPushTest() {
        this.$router.push('/');
    }
    render() {
        const { title, msg } = this;
        return <div class="index">
            <common-title title={title}></common-title>
            <p class="msg">{msg}</p>
            <div class="btn" onClick={this.routerPushTest}>路由跳转首页</div>
        </div>;
    }
}
