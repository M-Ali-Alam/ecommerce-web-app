const exporess = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletePoduct,
  getProductDetails,
} = require("../controllers/productController");

const router = exporess.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deletePoduct).get(getProductDetails);

module.exports = router;
