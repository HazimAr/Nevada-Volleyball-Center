import Axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
interface ID  {
	id: string;
};

export default function Main({
	params,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<p>{params.data}</p>
			<p>Page</p>
		</div>
	);
}
export const getStaticProps: GetStaticProps = async (slug) => {
	const res: ID[] = (await Axios.get(`http://localhost:3000/slug${slug.params.slug}.json`))
		.data;
	return {
		props: {
			params: res,
		},
	};
};

export async function getStaticPaths() {
	const res: ID[] = (await Axios.get("http://localhost:3000/index.json"))
		.data;

	const paths = res.map((data) => {
		return { params: { slug: data.id } };
	});
	return {
		paths: paths,
		fallback: false,
	};
}
