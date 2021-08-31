<template>
<transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <ul v-show="list.open" class="sub-items">
        <li class="sub-item" v-for="(item, index) in list.subnav" :key="'item' + index">
            <i v-if="item.subnav" class="far" :class="{
            'fa-plus-square': !item.open,
            'fa-minus-square': item.open,
          }"></i>
            <div class="title" @click="item.open = !item.open">
                {{ item.title }}
            </div>
            <Dropdown class="subnav" v-if="item.subnav" :list="item" />
        </li>
    </ul>
</transition>
</template>

<script>
export default {
    name: "Dropdown",
    props: ["list"],
    methods: {
        enter(el) {
            el.style.height = "auto";
            const height = getComputedStyle(el).height;

            el.style.height = 0;

            getComputedStyle(el);

            setTimeout(() => {
                el.style.height = height;
            });
        },
        afterEnter(el) {
            el.style.height = "auto";
        },
        leave(el) {
            el.style.height = getComputedStyle(el).height;

            getComputedStyle(el);

            setTimeout(() => {
                el.style.height = 0;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.sub-items {
    list-style: none;

    .sub-item {
        position: relative;
        color: #fefefe;
        background-color: #333;
        border-top: 1px solid #222;
        cursor: pointer;

        .subnav {
            padding-left: 20px;
        }

        .title {
            padding: 10px 0;
            text-indent: 20px;
        }

        i {
            position: absolute;
            top: 12px;
            right: 10px;
        }
    }
}

.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}
</style>
