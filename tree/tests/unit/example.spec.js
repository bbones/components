import {shallowMount, mount} from '@vue/test-utils'
import Tree from '@/components/Tree.vue'

describe('Tree.vue', () => {
    const treeData = [
        {
            id: 1, text: "Beverages", children:
                [
                    {id: 2, text: "Water"},
                    {id: 3, text: "Coffee"},
                    {
                        id: 4, text: "Tee", children:
                            [
                                {id: 5, text: "Black Tea"},
                                {id: 6, text: "White Tea"},
                                {
                                    id: 7, text: "Green Tea", children:
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

        {
            id: 10, text: "Main Course", children:
                [
                    {id: 11, text: "Poultry"},
                    {id: 12, text: "Fish"},
                    {
                        id: 13, text: "Meat", children:
                            [
                                {id: 15, text: "Baked"},
                                {id: 16, text: "Salted"},
                                {
                                    id: 17, text: "Steak", children:
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

    ];

    it('renders props.treeData when passed #1',  () => {

        const wrapper = mount(Tree, {
            propsData: {treeData}
        });
        console.log(wrapper.text());
        expect(wrapper.text()).toMatch("Beverages  Main Course");

    });

    it('renders props.treeData when passed #2',  () => {

        const wrapper = mount(Tree, {
            propsData: {treeData}
        });
        console.log(wrapper.text());
        expect(wrapper.text()).toMatch("Beverages  Main Course");

    });

    it('responds click caret', async () => {
        const wrapper = mount(Tree, {
            propsData: {treeData}
        });

        console.log(wrapper.text());
        expect(wrapper.text()).toMatch("Beverages  Water  Coffee  Tee  Black Tea  White Tea  Green Tea  Sencha  Gyokuro  Matcha  Pi Lo Chun  Main Course  Poultry  Fish  Meat  Baked  Salted  Steak  Tenderloin  T-bone  New York");
        // const water = wrapper.find("#tree1");
        // console.log(water.text(), water.isVisible());
        //
        // const caretSpan = wrapper.find("#caret10");
        // // caretSpan.trigger("click");
        // console.log(caretSpan);
        // await wrapper.vm.$nextTick();


    });


})
