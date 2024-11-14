// Calculator.test.js
import { mount } from '@vue/test-utils';
import { describe,beforeEach, it, expect } from 'vitest';
import Caulculadora from '../components/Calculadora.vue'; // Ajusta la ruta si es necesario


describe('Calculator', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Caulculadora);
    });

    it('afegir numeros', async () => {
        // Simular clicks
        await wrapper.vm.appendToDisplay('5');
        expect(wrapper.vm.display).toBe('5');

        await wrapper.vm.appendToDisplay('3');
        expect(wrapper.vm.display).toBe('53');
    });

    it('afegir punts decimals', async () => {
        await wrapper.vm.appendToDisplay('2');
        await wrapper.vm.appendToDisplay('.');
        expect(wrapper.vm.display).toBe('2.');

        await wrapper.vm.appendToDisplay('5');
        expect(wrapper.vm.display).toBe('2.5');
    });

    it('substituir els punts decimals anteriors', async () => {
        await wrapper.vm.appendToDisplay('3');
        await wrapper.vm.appendToDisplay('.');
        await wrapper.vm.appendToDisplay('.');
        expect(wrapper.vm.display).toBe('3.');
    });

    it('substituir operadors anteriors', async () => {
        await wrapper.vm.appendToDisplay('4');
        await wrapper.vm.appendToDisplay('+');
        await wrapper.vm.appendToDisplay('+');
        expect(wrapper.vm.display).toBe('4+'); // ha de reeplaçar el primer +

        await wrapper.vm.appendToDisplay('3');
        expect(wrapper.vm.display).toBe('4+3');

        await wrapper.vm.appendToDisplay('*');
        expect(wrapper.vm.display).toBe('4+3*'); // should append
    });

    it('netejar la pantalla', async () => {
        await wrapper.vm.appendToDisplay('7');
        await wrapper.vm.clearDisplay();
        expect(wrapper.vm.display).toBe('');
    });

});