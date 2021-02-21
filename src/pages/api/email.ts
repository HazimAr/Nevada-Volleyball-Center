import mailgun from "mailgun-js";
import type { NextApiRequest, NextApiResponse } from "next";

import { COMPANY_INFO, EMAIL_LIST } from "../../config";

const DOMAIN = "mail.nevadavolleyballcenter.com";
const API_KEY = "4212211d51d83d02b2f66a78888f0639-d32d817f-ba21f6d6";
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

type Data = {
	name: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
};

// eslint-disable-next-line import/no-default-export
export default function Email(
	req: NextApiRequest,
	res: NextApiResponse
): NextApiResponse {
	if (req.method === "POST") {
		const body: Data = {
			name: req.body.name,
			phone: req.body.phone,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		};
		const data = {
			from: `${body.name} <${body.email}>`,
			to: `${COMPANY_INFO.email}, ${EMAIL_LIST} `,
			subject: `${body.subject}`,
			text: `
            name: ${body.name}
            phone: ${body.phone}
            email: ${body.email}
            subject: ${body.subject}

            message: 

            ${body.message}
            `,
		};
		// eslint-disable-next-line no-void
		void mg.messages().send(data, (_error, body) => {
			res.status(200).json({ detail: body.message });
		});
		return res;
	}
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.status(100).json({ detail: "Method Not Allowed" });
	res.redirect(100, "/#");
	return res;
}
