const prefix =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333/"
    : "https://adonis-api-server.herokuapp.com/";

export const userRoutes = {
  fetchUserEmail: prefix + "api/user/get_email/",
  fetchUserWish: prefix + "api/user/get_wish_list/",
  toogleWishURL: prefix + "api/user/toogle_wish_list/",
  changePassURL: prefix + "api/user/change_password/",
  deleteUser: prefix + "api/user/remove/",
};

export const eventRoutes = {
  //FetchURL: "https://adonis-api-server.herokuapp.com/api/eventos",
  FetchURL: prefix + "api/eventos/",
  creatEventURL: prefix + "api/eventos/create",
  searchByName: prefix + "api/eventos/search_by_name",
};

export const wishRoutes = {
  wishUrl: prefix + "api/wishlist/",
  deleteWishUrl: prefix + "api/wishlist/delete/",
  userCreateWishListURL: prefix + "api/wishlist/create/",
  userAddWishListURL: prefix + "api/wishlist/add/",
  checkDuplicate: prefix + "api/wishlist/check_duplicate/",
};

export const paymentRoutes = {
  paymentsURL: prefix + "api/user_payment/",
  paymentsCreateURL: prefix + "api/user_payment/create/",
};

export const faqRoutes = {
  faqURL: prefix + "api/faqs",
};
