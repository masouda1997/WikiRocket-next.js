import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/item";

type Props = {
	params: {
		searchTerm: string;
	};
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;
	const displayTerm = searchTerm.replaceAll("%20", " ");

	if (!data?.query?.pages) {
		return {
			title: `${displayTerm} Not Found`,
		};
	}

	return {
		title: displayTerm,
		description: `search result for ${displayTerm}`,
	};
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;
	const results: Result[] | undefined = data?.query?.pages;
	const content = (
		<main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
			{results ? (
				Object.values(results).map((res) => {
					return <Item key={res.pageid} result={res} />;
				})
			) : (
				<h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
			)}
		</main>
	);
	return content;
}
