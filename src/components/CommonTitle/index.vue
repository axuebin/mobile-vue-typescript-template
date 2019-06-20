<template>
    <div class="common-title">
        {{title}}
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Label extends Vue {
    @Prop() title: string;
}
</script>
<style lang="scss" scoped>
.common-title {
   text-align: center;
   font-size: 24px; /*!px*/
   color: #333333;
}
</style>
