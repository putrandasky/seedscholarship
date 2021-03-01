import {
  mount
} from '@vue/test-utils'
import AdminLogin from '../../admin/views/auth/AuthLogin.vue';
test('submit without data', async () => {
  const wrapper = mount(AdminLogin)
  await wrapper.find("form").trigger('submit.prevent')
  expect(wrapper).toMatchSnapshot()
})
