const { populate } = require("../models/productModel");

const cartService = "./cartservice.js";
const Address = "../models/addressModel.js";
async function createOrder(user, shippAddress) {
  let address;
  if (shippAddress._id) {
    let existAddress = await Address.findById(shippAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();

    user.address.push(address);
    await user.save();
  }
  const cart = await cartService.findUserCart("user._id");
  const orderItems = [];
  for (const item of cart.cartItems) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discounted: item.discountedPrice,
    });
    const createOrderItem = await orderItem.save();
    orderItems.push(createOrderItem);
  }
  const createOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounte: cart.discounte,
    totalItem: cart.totalItem,
    shippAddress: Address,
  });

  const savedOrder = await createOrder.save();
  return savedOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);
  (order.orderStatus = "Placed"), (order.paymentDetails = "Complete");

  return await order.save();
}

async function confirmOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Confirmed";

  return await order.save();
}

async function shipOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Shipped";

  return await order.save();
}

async function deleverOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Delivered";

  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "Cancelled";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("users")
    .populate({ path: "orderItems", populate: { path: "products" } })
    .populate("shippingAddress");

  return order;
}

async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "Placed" })
      .populate({ path: "orderItems", populate: { path: "products" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrder() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  createOrder,
  placeOrder,
  confirmOrder,
  shipOrder,
  deleteOrder,
  deleverOrder,
  cancelOrder,
  findOrderById,
  getAllOrder,
};
