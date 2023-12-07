import {useState} from 'react'

const useShoppingCar = () => {
    const [carItems, setCarItems] = useState([])

    const addToCar = (productInfo) => {
        setCarItems(key => [...key, productInfo]);
    }

    return{
        carItems,
        addToCar
    }
}

export default useShoppingCar