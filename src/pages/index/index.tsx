import Vue, { CreateElement } from 'vue';
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
  title: String = '我是标题';
  msg: String = 'hello world';
  mounted() {
  };
  render(h: CreateElement) {
    const { title, msg } = this;
    return <div class="index">
      <common-title title={title}></common-title>
      <p class="msg">{msg}</p>
    </div>;
  }
}