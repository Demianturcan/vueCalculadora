// UserList.spec.js
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Axios from '../components/Axios.vue';
import axios from 'axios';

vi.mock('axios');

describe('Axios', () => {
    it('cargant usuaris', async () => {
        axios.get.mockResolvedValueOnce({ data: { users: [] } }); // Simulem una resposta buida

        const wrapper = mount(Axios);

        expect(wrapper.text()).toContain('Carregant...'); // Comprovem que hi ha el text de càrrega
    });

    it('fetch de users', async () => {
        const mockUsers = [
            { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123456789' },
            { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '987654321' },
        ];

        axios.get.mockResolvedValueOnce({ data: { users: mockUsers } }); // Simulem una resposta amb usuaris

        const wrapper = mount(Axios);

        await wrapper.vm.fetchUsers();
        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain('Llista d\'Usuaris');
        expect(wrapper.text()).toContain('John Doe');
        expect(wrapper.text()).toContain('Jane Doe');    // Afegit per assegurar-nos que tots dos noms es mostren
        expect(wrapper.findAll('li')).toHaveLength(mockUsers.length);
    });


});