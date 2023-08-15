<script setup>
import { reactive } from "vue";

const emit = defineEmits(['itemChanged']);
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  keys: {
    type: Array, // ex) ['productId', 'productName', 'productCode', 'productPrice']
    required: true,
  },
  keyNames: {
    type: Array, // ex) ['상품 ID', '상품명', '상품코드', '상품가격']
    required: true
  },
  isDropDowns: {
    type: Array
  },
  /**
   * 드롭다운 리스트 배열
   */
  dropDownList: {
    type: Array
  }
})
const state = reactive({
  item: props.item
})

const checkAndUpdate = (key, e) => {
  if (props.dropDownList.map(d => d[key]).find(d => e.target.value === d)) {
    const selectedOption = props.dropDownList.find(d => d[key] === e.target.value);
    update(selectedOption);
  }
}
const update = (selectedOption) => {
  const previousId = state.item[props.keys[0]];
  state.item = selectedOption;
  emit('itemChanged', selectedOption, previousId);
}
</script>

<template>
  <div class="container">
    <div class="row rounded bg-light mb-3">
      <div class="col" v-for="(key, index) in keys" :key="index">
        <div class="form-group m-3">
          <label class="form-label">{{ keyNames[index] }}</label>
          <div v-if="isDropDowns[index]">
            <input v-model="state.item[key]"
                   class="form-control"
                   list="options-list"
                   @input="checkAndUpdate(key, $event)">
            <datalist id="options-list">
              <option v-for="d in dropDownList">
                {{ d[key] }}
              </option>
            </datalist>
          </div>
          <div v-else>
            <input v-model="state.item[key]" class="form-control" type="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
