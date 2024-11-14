import { mount } from '@vue/test-utils';
import Fetch from '../components/Fetch.vue';
import { vi, it, describe, expect } from 'vitest';

// Mòck del fetch

global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
            { id: 1, name: 'User One', email: 'user1@example.com', body: 'This is a comment.' },
            { id: 2, name: 'User Two', email: 'user2@example.com', body: 'This is another comment.' },
        ]),
    })
);

describe('Fetch', () => {
    it('missatge de carrega abans dels comentaris', () => {
        const wrapper = mount(Fetch);
        expect(wrapper.text()).toContain('Cargant comentaris...');
    });

    it('mostra els comentaris', async () => {
        const wrapper = mount(Fetch);

        //espera per assegurar-nos que el fetch s'ha resolt
        await wrapper.vm.fetchComments();

        expect(wrapper.text()).toContain('User One');
        expect(wrapper.text()).toContain('This is a comment.');
        expect(wrapper.text()).toContain('User Two');
        expect(wrapper.text()).toContain('This is another comment.');
    });
});