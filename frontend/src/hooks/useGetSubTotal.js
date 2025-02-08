import {useSelector } from "react-redux";

const useGetSubTotal = () => {
    
    const {items, error, loading} = useSelector((state) => state.cart);
    const { records } = useSelector((state) => state.food);

    const subTotalAmount = Object.entries(items).reduce(
      (total, [itemId, quantity]) => {
        const item = records.find((product) => product._id === itemId); // Find the item details
        if (item) {
          total += item.price * quantity; // Add item's total price to the subtotal
        }
        return total;
      },
      0
    );

  return { subTotalAmount, items, records };

};

export default useGetSubTotal;


