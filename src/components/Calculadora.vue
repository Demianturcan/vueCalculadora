<template>
<main class=" content">
  <div class="calculator">
    <input
        type="text"
        :value="display"
        disabled
    />
    <div class="buttons">
      <button @click="appendToDisplay('1')">1</button>
      <button @click="appendToDisplay('2')">2</button>
      <button @click="appendToDisplay('3')">3</button>
      <button @click="appendToDisplay('+')">+</button>

      <button @click="appendToDisplay('4')">4</button>
      <button @click="appendToDisplay('5')">5</button>
      <button @click="appendToDisplay('6')">6</button>
      <button @click="appendToDisplay('-')">-</button>

      <button @click="appendToDisplay('7')">7</button>
      <button @click="appendToDisplay('8')">8</button>
      <button @click="appendToDisplay('9')">9</button>
      <button @click="appendToDisplay('*')">*</button>

      <button @click="clearDisplay">C</button>
      <button @click="appendToDisplay('0')">0</button>
      <button @click="appendToDisplay('.')">.</button>
      <button @click="calculateResult">=</button>
      <button @click="appendToDisplay('/')">/</button>
    </div>
  </div>
</main>
</template>

<script>
export default {

  data() {
    return {
      display: '',
    };
  },
  methods: {
    appendToDisplay(value) {
      // Check if the value is an operator
      const operators = ['+', '-', '*', '/'];

      if (operators.includes(value)) {
        const lastChar = this.display.slice(-1);

        // If last character is an operator, replace it
        if (operators.includes(lastChar)) {
          this.display = this.display.slice(0, -1) + value;
        } else {
          this.display += value;
        }
      } else if (value === '.') {
        // Check for decimal point as before
        const lastChar = this.display.slice(-1);
        if (/\d/.test(lastChar) && !this.display.match(/(\d+\.\d*)$/)) {
          this.display += value;
        }
      } else {
        // Append number
        this.display += value;
      }
    },
    clearDisplay() {
      this.display = '';
    },
    calculateResult() {
      try {
        // Evaluate the expression
        this.display = eval(this.display).toString();
      } catch (e) {
        this.display = 'Error';
      }
    },
  },
};


</script>

<style scoped>

.calculator {
  max-width: 300px;
  margin: 50px auto;
  border: 1px solid #aaaaaa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background: #fafafa;
}

input {
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  text-align: right;
  font-size: 30px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

button {
  height: 60px;
  font-size: 20px;
  cursor: pointer;
}
main {
  min-height: 100vh;
  flex: 1;
}
.content{
  margin: 0;
}
</style>