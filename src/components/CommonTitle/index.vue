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
    @Prop() title: String;
}
</script>
<style lang="scss" scoped>
.common-title {
   text-align: center;
   font-size: 24px;
   color: #333333;
}
</style>

