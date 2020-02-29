<template>
    <ul :class="mode">
        <Node :id="'node'+node.id" v-for="node in treeData" v-bind:key="node.id" :node="node"></Node>
    </ul>
</template>

<script>
    import Node from "@/components/Node";

    export default {
        components: { Node },
        name: 'Tree',
        props: {
            treeData: Array,
            mode: {
                type: String,
                default: "ul"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* Remove default bullets */
    ul, #myUL {
        list-style-type: none;
        text-align: left;
    }

    /* Remove margins and padding from the parent ul */
    #myUL {
        margin: 0;
        padding: 0;
    }

    .node {
        cursor: pointer;
        user-select: none; /* Prevent text selection */
    }

    /* Hide the nested list */
    .nested {
        display: none;
    }

    /* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
    .active {
        cursor: pointer;
        display: block;
    }

</style>
