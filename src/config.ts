// google analytics mearsurement id
const GA_TRACKING_ID = "G-15J1PR03V7";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

const COMPANY_INFO = {
	name: "Nevada Volleyball Center",
	email: "NevadaVolleyballCenter@gmail.com",
	phone: "702-666-6666",
	address1: "3778 W. Cheyenne Ave STE 120, ",
	address2: "N. Las Vegas, NV 8903",
};
const COMPANY_NAME = "Nevada Volleyball Center";
const COMPANY_EMAIL = "NevadaVolleyballCenter@gmail.com";
const COMPANY_PHONE = "702-666-6666";
const COMPANY_ADDRESS1 = "3778 W. Cheyenne Ave STE 120, ";
const COMPANY_ADDRESS2 = "N. Las Vegas, NV 8903";
const EMAIL_LIST =
	"hazimarafa69@gmail.com, sparksvolleyballclub@gmail.com, nevadavolleyballcenter@gmail.com";

const COMPANY_SOCIALS = {
	instagram: "https://www.instagram.com/webdefyer/",
	facebook: "https://www.facebook.com/WebDefyer-107501398041284",
	linkedin: "https://www.linkedin.com/company/webdefyer",
};

export {
	COMPANY_SOCIALS,
	GA_TRACKING_ID,
	IS_PRODUCTION,
	IS_TEST,
	IS_BROWSER,
	COMPANY_INFO,
	EMAIL_LIST,
};
