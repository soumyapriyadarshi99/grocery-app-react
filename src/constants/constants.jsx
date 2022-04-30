export const Constants = {
  imageUrl: "http://rjtmobile.com/grocery/images/",
  apiUrl: "http://apolis-grocery.herokuapp.com/api/",

  aboutGrocery: `Spare more with ‘Organization Name’! We give you the most
    minimal costs on the entirety of your grocery needs.
    ‘Organization Name’ is a low-cost online general store that gets
    items crosswise over classifications like grocery, natural
    products and vegetables, excellence and health, family unit
    care, infant care, pet consideration, and meats and fish
    conveyed to your doorstep.`,

  aboutGroceryItems: `Browse more than 5,000 items at costs lower than markets each
    day! Calendar conveyance according to your benefit. Level 20%
    cashback on your first request with coupon code ‘Organization
    Name’ 20. Max cashback is Rs.250.`,

  regexEmailCheck:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  regexMobileCheck: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  fullNameRequiredError: "Full name is required",
  emailRequiredError: "Email is required",
  emailInavlidError: "Please provide a valid email id",
  messageRequiredError: "Message is required",
  messageLengthError: "Message length should be greater than 35 characters",
  mobileNumberRequiredError: "Mobile number is required",
  mobileNumberInvalidError: "Please provide a valid mobile number",
  passwordRequiredError: "Password is required",
  miniumPasswordLengthError: "Password must be more than 6 characters",
  maximumPasswordLengthError: "Password cannot exceed more than 10 characters",
};

export const ActionType = {
  ADD_ITEM: "ADDITEM",
  DELETE_ITEM: "DELITEM",
  INCREASE_QTY: "INCREASE_QTY",
  DECREASE_QTY: "DECREASE_QTY",
};
