<template>
  <main class="products_list-view">
    <section class="products_list-header">
      <section class="products_list_header-inner container">
        <section class="products_list-heading">
          <h3>موتور های برق</h3>
          <p class="text-muted">خانه / ابزار های موتوری و بنزینی</p>
        </section>
        <img
          src="/public/images/Products/7500WGenerator.svg"
          alt="Generators"
        />
      </section>
    </section>

    <section class="products_list-body container">
      <section class="products_list-result_and_view_type">
        <p>نمایش نتایج: 1 تا 9 از 18</p>
        <section class="products_list-view_type">
          <button
            :class="{ active: viewType === 'list' }"
            @click="setViewType('list')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 7.5C4.24728 7.5 4.72419 7.30246 5.07583 6.95083C5.42746 6.59919 5.625 6.12228 5.625 5.625C5.625 5.12772 5.42746 4.65081 5.07583 4.29917C4.72419 3.94754 4.24728 3.75 3.75 3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625C1.875 6.12228 2.07254 6.59919 2.42417 6.95083C2.77581 7.30246 3.25272 7.5 3.75 7.5ZM8.625 4.5C8.32663 4.5 8.04048 4.61853 7.8295 4.8295C7.61853 5.04048 7.5 5.32663 7.5 5.625C7.5 5.92337 7.61853 6.20952 7.8295 6.4205C8.04048 6.63147 8.32663 6.75 8.625 6.75H21.375C21.6734 6.75 21.9595 6.63147 22.1705 6.4205C22.3815 6.20952 22.5 5.92337 22.5 5.625C22.5 5.32663 22.3815 5.04048 22.1705 4.8295C21.9595 4.61853 21.6734 4.5 21.375 4.5H8.625ZM8.625 17.25C8.32663 17.25 8.04048 17.3685 7.8295 17.5795C7.61853 17.7905 7.5 18.0766 7.5 18.375C7.5 18.6734 7.61853 18.9595 7.8295 19.1705C8.04048 19.3815 8.32663 19.5 8.625 19.5H21.375C21.6734 19.5 21.9595 19.3815 22.1705 19.1705C22.3815 18.9595 22.5 18.6734 22.5 18.375C22.5 18.0766 22.3815 17.7905 22.1705 17.5795C21.9595 17.3685 21.6734 17.25 21.375 17.25H8.625ZM7.5 12C7.5 11.7016 7.61853 11.4155 7.8295 11.2045C8.04048 10.9935 8.32663 10.875 8.625 10.875H21.375C21.6734 10.875 21.9595 10.9935 22.1705 11.2045C22.3815 11.4155 22.5 11.7016 22.5 12C22.5 12.2984 22.3815 12.5845 22.1705 12.7955C21.9595 13.0065 21.6734 13.125 21.375 13.125H8.625C8.32663 13.125 8.04048 13.0065 7.8295 12.7955C7.61853 12.5845 7.5 12.2984 7.5 12ZM5.625 12C5.625 12.4973 5.42746 12.9742 5.07583 13.3258C4.72419 13.6775 4.24728 13.875 3.75 13.875C3.25272 13.875 2.77581 13.6775 2.42417 13.3258C2.07254 12.9742 1.875 12.4973 1.875 12C1.875 11.5027 2.07254 11.0258 2.42417 10.6742C2.77581 10.3225 3.25272 10.125 3.75 10.125C4.24728 10.125 4.72419 10.3225 5.07583 10.6742C5.42746 11.0258 5.625 11.5027 5.625 12ZM3.75 20.25C4.24728 20.25 4.72419 20.0525 5.07583 19.7008C5.42746 19.3492 5.625 18.8723 5.625 18.375C5.625 17.8777 5.42746 17.4008 5.07583 17.0492C4.72419 16.6975 4.24728 16.5 3.75 16.5C3.25272 16.5 2.77581 16.6975 2.42417 17.0492C2.07254 17.4008 1.875 17.8777 1.875 18.375C1.875 18.8723 2.07254 19.3492 2.42417 19.7008C2.77581 20.0525 3.25272 20.25 3.75 20.25Z"
                fill="#39354C"
              />
            </svg>
          </button>
          <button
            :class="{ active: viewType === 'grid' }"
            @click="setViewType('grid')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 10.5C3.55109 10.5 3.36032 10.421 3.21967 10.2803C3.07902 10.1397 3 9.94891 3 9.75V3.7515C3 3.55258 3.07902 3.36182 3.21967 3.22117C3.36032 3.08051 3.55109 3.0015 3.75 3.0015H9.75C9.94891 3.0015 10.1397 3.08051 10.2803 3.22117C10.421 3.36182 10.5 3.55258 10.5 3.7515V9.75C10.5 9.94891 10.421 10.1397 10.2803 10.2803C10.1397 10.421 9.94891 10.5 9.75 10.5H3.75ZM14.25 10.5C14.0511 10.5 13.8603 10.421 13.7197 10.2803C13.579 10.1397 13.5 9.94891 13.5 9.75V3.7515C13.5 3.55258 13.579 3.36182 13.7197 3.22117C13.8603 3.08051 14.0511 3.0015 14.25 3.0015H20.2485C20.4474 3.0015 20.6382 3.08051 20.7788 3.22117C20.9195 3.36182 20.9985 3.55258 20.9985 3.7515V9.75C20.9985 9.94891 20.9195 10.1397 20.7788 10.2803C20.6382 10.421 20.4474 10.5 20.2485 10.5H14.25ZM3.75 21C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V14.25C3 14.0511 3.07902 13.8603 3.21967 13.7197C3.36032 13.579 3.55109 13.5 3.75 13.5H9.75C9.94891 13.5 10.1397 13.579 10.2803 13.7197C10.421 13.8603 10.5 14.0511 10.5 14.25V20.25C10.5 20.4489 10.421 20.6397 10.2803 20.7803C10.1397 20.921 9.94891 21 9.75 21H3.75ZM14.25 21C14.0511 21 13.8603 20.921 13.7197 20.7803C13.579 20.6397 13.5 20.4489 13.5 20.25V14.25C13.5 14.0511 13.579 13.8603 13.7197 13.7197C13.8603 13.579 14.0511 13.5 14.25 13.5H20.2485C20.4474 13.5 20.6382 13.579 20.7788 13.7197C20.9195 13.8603 20.9985 14.0511 20.9985 14.25V20.25C20.9985 20.4489 20.9195 20.6397 20.7788 20.7803C20.6382 20.921 20.4474 21 20.2485 21H14.25Z"
                fill="#FDAC16"
              />
            </svg>
          </button>
        </section>
      </section>

      <section class="products_list-filter_tags">
        <button
          v-for="(tag, index) in filterTags"
          :key="index"
          :class="`badge badge-lightwhite ${
            currentlyActiveFilterBadge === tag ? 'active' : ''
          }`"
          @click="setActiveFilterBadge(tag)"
        >
          {{ tag }}
        </button>
      </section>
      <section class="products_list-list" :data-view="viewType">
        <CardBase :grid-or-list="viewType" v-for="i in 17" />
      </section>

      <section class="products_list-paginations">
        <button v-if="currentPage !== 1" @click="changePage(currentPage - 1)">
          <Arrow :width="24" direction="right" />
        </button>
        <ul class="products_list_pagination-inner">
          <li v-for="i in 4" :key="i">
            <button
              @click="changePage(i)"
              :class="{ active: i === currentPage }"
            >
              {{ i }}
            </button>
          </li>
        </ul>
        <button v-if="currentPage !== 4" @click="changePage(currentPage + 1)">
          <Arrow :width="24" direction="left" />
        </button>
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import CardBase from "../components/Products/CardBase.vue";
import Arrow from "../components/icons/Arrow.vue";
const props = defineProps(["category"]);
const filterTags = ref([
  "پر فروش ترین ها",
  "پر تخفیف ترین ها",
  "منتخب کاربران",
  "داغ ترین ها",
  "ارزان ترین ها",
  "گران ترین ها",
]);

const currentlyActiveFilterBadge = ref("پر فروش ترین ها");
function setActiveFilterBadge(badgeName) {
  if (badgeName === currentlyActiveFilterBadge.value)
    currentlyActiveFilterBadge.value = "";
  else currentlyActiveFilterBadge.value = badgeName;
}

const currentPage = ref(1);
function changePage(pageNum) {
  currentPage.value = pageNum;
}

const viewType = ref("grid");
function setViewType(type) {
  viewType.value = type;
}
</script>
