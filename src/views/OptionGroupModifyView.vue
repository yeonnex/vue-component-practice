<script setup>
import BaseList from "@/components/BaseList.vue";
import { reactive } from "vue";
import { Vue } from "vue";

const options = [{productId: 13, productName: '아메리카노', productCode: '400001', productPrice: 5800},
                 {productId: 14, productName: '카페라떼', productCode: '400002', productPrice: 5200},
                 {productId: 15, productName: '카라멜마끼아또',productCode: '400003', productPrice: 4800}];

const products = [{productId: 13, productName: '아메리카노', productCode: '400001', productPrice: 5800},
  {productId: 14, productName: '카페라떼', productCode: '400002', productPrice: 5200},
  {productId: 15, productName: '카라멜마끼아또',productCode: '400003', productPrice: 4800},
  {productId: 16, productName: '수박쥬스',productCode: '400004', productPrice: 4800},
  {productId: 17, productName: '자몽쥬스',productCode: '400005', productPrice: 4800},
  {productId: 18, productName: '아몬드두유',productCode: '400006', productPrice: 4800},
  {productId: 18, productName: '녹차라떼',productCode: '400007', productPrice: 4800}
];

const state = reactive({
  options: options,
})
const changeItem = (item, previousId) => {
  console.log(`real change!`);
  const deleteIndex = state.options.findIndex((option) => option.productId === previousId);
  state.options.splice(deleteIndex, 1, item);
  state.options = [...state.options]; // Vue 의 반응성 시스템에 감지하여 UI 업데이트
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
