<template>
  <div class="searchable-select">
    <input
      v-model="searchQuery"
      @focus="isOpen = true"
      @blur="handleBlur"
      @keydown.up.prevent="highlightPrevOption"
      @keydown.down.prevent="highlightNextOption"
      @keydown.enter.prevent="selectHighlightedOption"
      @input="filterOptions"
      class="search-input"
      :placeholder="placeholder"
    />
    <ul v-if="isOpen" class="options-list">
      <li
        v-for="(option, index) in filteredOptions"
        :key="index"
        :class="{ 'highlighted': index === highlightedIndex }"
        @mousedown="selectOption(option)"
        @mouseenter="highlightIndex(index)"
      >
        {{ option.productName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
  },
  data() {
    return {
      searchQuery: "",
      isOpen: false,
      highlightedIndex: -1,
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option =>
        option.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    handleBlur() {
      this.isOpen = false;
      this.highlightedIndex = -1;
    },
    filterOptions() {
      this.highlightedIndex = -1;
    },
    highlightPrevOption() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
      }
    },
    highlightNextOption() {
      if (this.highlightedIndex < this.filteredOptions.length - 1) {
        this.highlightedIndex++;
      }
    },
    highlightIndex(index) {
      this.highlightedIndex = index;
    },
    selectHighlightedOption() {
      if (this.highlightedIndex !== -1) {
        this.selectOption(this.filteredOptions[this.highlightedIndex]);
      }
    },
    selectOption(option) {
      this.searchQuery = option.productName;
      this.isOpen = false;
      this.$emit("option-selected", option);
    },
  },
};
</script>

<style scoped>
.searchable-select {
  position: relative;
  display: inline-block;
}

.search-input {
  width: 100%;
}

.options-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 1;
}

.options-list li {
  padding: 8px;
  cursor: pointer;
}

.options-list li.highlighted {
  background-color: #f2f2f2;
}
</style>

