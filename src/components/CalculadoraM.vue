<template>
  <div id="calculator">
    <input v-model="input" placeholder="0" disabled />
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="appendNumber('7')">7</button>
      <button @click="appendNumber('8')">8</button>
      <button @click="appendNumber('9')">9</button>
      <button @click="setOperator('/')">/</button>

      <button @click="appendNumber('4')">4</button>
      <button @click="appendNumber('5')">5</button>
      <button @click="appendNumber('6')">6</button>
      <button @click="setOperator('*')">*</button>

      <button @click="appendNumber('1')">1</button>
      <button @click="appendNumber('2')">2</button>
      <button @click="appendNumber('3')">3</button>
      <button @click="setOperator('-')">-</button>

      <button @click="appendNumber('0')">0</button>
      <button @click="calculateResult">=</button>
      <button @click="setOperator('+')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      operator: '',
      previousValue: '',
    };
  },
  methods: {
    appendNumber(num) {
      this.input += num;
    },
    setOperator(op) {
      if (this.input === '') return;
      if (this.previousValue !== '') {
        this.calculateResult();
      }
      this.operator = op;
      this.previousValue = this.input;
      this.input = '';
    },
    calculateResult() {
      let result;
      const prev = parseFloat(this.previousValue);
      const current = parseFloat(this.input);
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
      this.input = result;
      this.operator = '';
      this.previousValue = '';
    },
    clear() {
      this.input = '';
      this.operator = '';
      this.previousValue = '';
    },
  },
};
</script>

<style scoped>
#calculator {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
button {
  padding: 20px;
  font-size: 20px;
}
input {
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: right;
}
</style>