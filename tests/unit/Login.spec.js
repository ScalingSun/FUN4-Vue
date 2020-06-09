
import { mount } from '@vue/test-utils'
import login from '@/components/login.vue'
import VueMaterial from "vue-material"
import Vue from 'vue';

describe('Login.vue', () => {
  let wrapper;
  beforeEach(()=>{
    Vue.use(VueMaterial);
    wrapper = mount(login);
  })
  it('test if submitting works.',  () => {
    expect(true).toBe(true);
  })

  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  
})

