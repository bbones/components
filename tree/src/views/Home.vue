<template>
  <div class="home">
    <Tree :treeData="treeData"/>
  </div>

</template>

<script>
// @ is an alias to /src
import Tree from '@/components/Tree.vue'

export default {
  name: 'Home',
  components: {
    Tree
  },
  data() {
    return {
      treeData: [
        {id: 1, text: "Beverages", children:
          [
            {id: 2, text: "Water"},
            {id: 3, text: "Coffee"},
            {id: 4, text: "Tee", children:
              [
                {id: 5, text: "Black Tea"},
                {id: 6, text: "White Tea"},
                {id: 7, text: "Green Tea", children:
                  [
                    {id: 8, text: "Sencha"},
                    {id: 9, text: "Gyokuro"},
                    {id: 10, text: "Matcha"},
                    {id: 11, text: "Pi Lo Chun"}
                  ]
                }
              ]
            }
          ]
        },

        {id: 10, text: "Main Course", children:
                  [
                    {id: 11, text: "Poultry"},
                    {id: 12, text: "Fish"},
                    {id: 13, text: "Meat", children:
                              [
                                {id: 15, text: "Baked"},
                                {id: 16, text: "Salted"},
                                {id: 17, text: "Steak", children:
                                          [
                                            {id: 25, text: "Tenderloin"},
                                            {id: 26, text: "T-bone"},
                                            {id: 27, text: "New York"},
                                          ]
                                }
                              ]
                    }
                  ]
        }

      ]
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

  /* Hide the nested list */
  .nested {
    display: none;
  }

  /* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
  .active {
    display: block;
  }

</style>

