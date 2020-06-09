import {  shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import VueMaterial from "vue-material"
import Vue from 'vue';

describe('Home.vue', () => {
  let wrapper;
  beforeEach(()=>{
    Vue.use(VueMaterial);
    wrapper = shallowMount(Home);
  })
  it('renders a vue instance', () => {
    expect(shallowMount(Home).isVueInstance()).toBe(true);
  });
})
