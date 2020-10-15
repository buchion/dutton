
import antidiabetes from '../../assets/teaimg/anti_diabetes.jpg'
import BPNormalizer from '../../assets/teaimg/BP_Normalizer.jpg'
import body_system_cleanser from '../../assets/teaimg/body_system_cleanser.jpg'
import cafelux3in1 from '../../assets/teaimg/cafelux3in1.jpg'
import cafelux_cappucino from '../../assets/teaimg/cafelux_cappucino.jpg'
import cafelux from '../../assets/teaimg/cafelux.jpg'
import kidney_liver_mind from '../../assets/teaimg/kidney_liver_mind.jpg'
import Immu_Boost_herbal from '../../assets/teaimg/Immu_Boost_herbal.jpg'
import man_and_woman from '../../assets/teaimg/man_and_woman.jpg'
import manhood_herb from '../../assets/teaimg/manhood_herb.jpg'
import relaxing_nite from '../../assets/teaimg/relaxing_nite.jpg'
import samira_green from '../../assets/teaimg/samira_green.jpg'
import slimfit_natural from '../../assets/teaimg/slimfit_natural.jpg'
import super_slimming_herbal from '../../assets/teaimg/super_slimming_herbal.jpg'
import tummy_fat_reducing from '../../assets/teaimg/tummy_fat_reducing.jpg'
import typhoid from '../../assets/teaimg/typhoid.jpg'
import anti_malaria from '../../assets/teaimg/anti-malaria.jpg'
import eye_bright from '../../assets/teaimg/eye-bright.jpg'
import rheumatic_arthritis from '../../assets/teaimg/rheumatic_arthritis.jpg'
import heart_supporting_herbal from '../../assets/teaimg/heart_supporting_herbal.jpg'


import samira_lemon from '../../assets/teaimg/samira_lemon.jpg'
import samira_strawberry from '../../assets/teaimg/samira_strawberry.jpg'
import samira_moringa from '../../assets/teaimg/samira_moringagingerlemon.jpg'
import samira_tumeric from '../../assets/teaimg/samira_tumeric.jpg'
import samira_gingerhoney from '../../assets/teaimg/samira_gingerhoney.jpg'
import samira_gingergarlic from '../../assets/teaimg/samira_gingergarlic.jpg'

import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        { id: 1, title: 'Anti Diabetes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: antidiabetes },
        { id: 2, title: 'Blood Pressure Normalizer', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 950, img: BPNormalizer },
        { id: 3, title: 'Body System Cleanser', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: body_system_cleanser },
        { id: 4, title: 'Cafelux Cappucino', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1200, img: cafelux_cappucino },
        { id: 5, title: 'Cafelux 3-in-1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: cafelux3in1 },
        { id: 6, title: 'Cafelux Original', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: cafelux },
        { id: 7, title: 'Heart Supporting Herbal', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: heart_supporting_herbal },
        { id: 8, title: 'Immune Boost Herbal', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: Immu_Boost_herbal },
        { id: 9, title: 'Kidney Liver Mind', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: kidney_liver_mind },
        { id: 10, title: 'Eye Bright Tea', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: eye_bright },
        { id: 11, title: 'Man and Woman', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: man_and_woman },
        { id: 12, title: 'Manhood Herb', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 950, img: manhood_herb },
        { id: 13, title: 'Relaxing Nite', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: relaxing_nite },
        { id: 14, title: 'Samira Green', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1200, img: samira_green },
        { id: 15, title: 'Slimfit Natural', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1000, img: slimfit_natural },
        { id: 16, title: 'Super Slimming Herbal', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: super_slimming_herbal },
        { id: 17, title: 'Tummy Fat Reducing', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: tummy_fat_reducing },
        { id: 18, title: 'Rheumatic Arthritis', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: rheumatic_arthritis },
        { id: 19, title: 'Typhoid', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: typhoid },
        { id: 20, title: 'Eye Bright Tea', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: eye_bright },
        { id: 21, title: 'Anti-Malaria', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: anti_malaria },
        { id: 22, title: 'Samira Green Tea with Lemon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_lemon },
        { id: 23, title: 'Samira Green Tea with Strawberry', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_strawberry },
        { id: 24, title: 'Samira Green Tea with moringa', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_moringa },
        { id: 25, title: 'Samira Green Tea with Tumeric', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_tumeric },
        { id: 26, title: 'Samira Green Tea with Ginger & Honey', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_gingerhoney },
        { id: 27, title: 'Samira Green Tea with Ginger Garlic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 900, img: samira_gingergarlic },
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 700
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 700
        }
    }

    else {
        return state
    }

}

export default cartReducer
