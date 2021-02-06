// google analytics mearsurement id
const GA_TRACKING_ID = "G-15J1PR03V7";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

const COMPANY_NAME = "Nevada Volleyball Center";
const COMPANY_EMAIL = "nevadavolleyballcenter@gmail.com";
const EMAIL_LIST =
	"nikkschaefer@gmail.com, hazimarafa69@gmail.com, sparksvolleyballclub@gmail.com, nevadavolleyballcenter@gmail.com";

export {
	GA_TRACKING_ID,
	IS_PRODUCTION,
	IS_TEST,
	IS_BROWSER,
	COMPANY_NAME,
	COMPANY_EMAIL,
	EMAIL_LIST,
};
