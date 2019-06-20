import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '@/assets/style/index.scss';

@Component({})
export default class App extends Vue {
    render() {
        return <div class="app">
            <router-view/>
        </div>;
    }
}
