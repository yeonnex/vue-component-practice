<template>
  <div>
    <SearchableSelect :options="options" @option-selected="handleOptionSelected" />
    <!-- ... other components -->
  </div>
</template>

<script>
import SearchableSelect from './SearchableSelect.vue'; // 경로는 실제 파일 위치에 맞게 수정

export default {
  components: {
    SearchableSelect
  },
  data() {
    return {
      options: [ /* Your options here */ ],
      selectedOption: null
    };
  },
  methods: {
    handleOptionSelected(option) {
      this.selectedOption = option;
    }
  }
};
</script>
