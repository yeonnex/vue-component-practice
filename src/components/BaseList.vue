<script setup>
import BaseListItem from "@/components/BaseListItem.vue";
const emit = defineEmits(['itemChanged']);
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const products = [{productId: 13, productName: '아메리카노', productCode: '400001', productPrice: 5800},
                  {productId: 14, productName: '카페라떼', productCode: '400002', productPrice: 5200},
                  {productId: 15, productName: '카라멜마끼아또',productCode: '400003', productPrice: 4800},
                  {productId: 16, productName: '수박쥬스',productCode: '400004', productPrice: 4800},
                  {productId: 17, productName: '자몽쥬스',productCode: '400005', productPrice: 4800},
                  {productId: 18, productName: '아몬드두유',productCode: '400006', productPrice: 4800},
                  {productId: 18, productName: '녹차라떼',productCode: '400007', productPrice: 4800}
];
const itemChanged = (item, previousId) => {
  emit('itemChanged', item, previousId);
}
</script>

<template>
  <div v-for="item in items">
    <BaseListItem
      :item="item"
      @item-changed="itemChanged"
      :keys="['productId', 'productName', 'productCode', 'productPrice']"
      :key-names="['상품 ID', '상품명', '상품코드', '상품가격']"
      :is-drop-downs="[false, true, true, false]"
      :drop-down-list="products"
    >
    </BaseListItem>
  </div>
</template>

<style scoped>

</style>
