<script setup>
import BaseList from "@/components/BaseList.vue";
import { reactive } from "vue";

const options = [{
  "productId": 7911,
  "productCode": "000001",
  "productName": "플레인프레즐",
  "englishName": "",
  "viewName": "플레인프레즐",
  "productType": "FINISHED",
  "productPrice": 6500,
  "productImage": null
},
  {
    "productId": 7906,
    "productCode": "000002",
    "productName": "페스토루꼴라(8013307205742)",
    "englishName": "",
    "viewName": "페스토루꼴라(8013307205742)",
    "productType": "FINISHED",
    "productPrice": 11000,
    "productImage": null
  },
  {
    "productId": 8107,
    "productCode": "000003",
    "productName": "라떼추가",
    "englishName": "",
    "viewName": "라떼추가",
    "productType": "FINISHED",
    "productPrice": 500,
    "productImage": null
  },];

const state = reactive({
  options: options,
})
const changeItem = (item, previousId) => {
  console.log(`real change!`);
  const deleteIndex = state.options.findIndex((option) => option.productId === previousId);
  state.options.splice(deleteIndex, 1, item);
  state.options = [...state.options]; // UI BaseList 업데이트. Vue 의 반응성 시스템에 감지시키기 위함.
  console.log(`result ${JSON.stringify(state.options)}`);
}
</script>

<template>
  <h1>옵션 그룹 수정</h1>
  <BaseList
    :items="state.options"
    @item-changed="changeItem"
  >
  </BaseList>
</template>

<style scoped></style>
