<template>
    <li :id="'li'+node.id">

        <span :id="'caret'+node.id" v-if="node.children" class="caret" @click="onCaretClick"></span>
        <span :id="'caret'+node.id" v-if="node.children" @click="onNodeClick(node.id)" >{{node.text}}</span>
        <span :id="'text'+node.id" v-else @click="onNodeClick(node.id)" >{{node.text}}</span>

        <Tree :id="'tree'+node.id" v-if="node.children" :treeData="node.children" mode="nested"/>
    </li>
</template>

<script>

    export default {
        name: "Node",
        props: {
            node: Object
        },
        components: { Tree: () => import('@/components/Tree.vue') },
        methods: {
            onCaretClick(event) {
                event.target.classList.toggle("caret-down");
                event.target.parentElement.querySelector(".nested").classList.toggle("active");
            },
            onNodeClick(event) {
                console.log((event))
            }
        }
    }
</script>

<style scoped>
    /* Style the caret/arrow */
    .caret {
        cursor: pointer;
        user-select: none; /* Prevent text selection */
    }

    /* Create the caret/arrow with a unicode, and style it */
    .caret::before {
        content: "\25B6";
        color: black;
        display: inline-block;
        margin-right: 6px;
    }

    /* Rotate the caret/arrow icon when clicked on (using JavaScript) */
    .caret-down::before {
        transform: rotate(90deg);
    }
</style>