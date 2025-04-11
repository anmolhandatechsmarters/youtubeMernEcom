

const orderController = require("../Controllers/order.Controller")
const authenticate =require("../middleware/authenticate")

router.post("/",orderController.createOrder)
router.get("/user",orderController.orderHistory)
router.get("/:id",orderController.findOrderById)

module.exports = router
