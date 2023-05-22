"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch("");

		// The useRouter hook allows you to programmatically change routes inside Client Components. Recommendation: Use the <Link> component for navigation unless you have a specific requirement for using useRouter here we add search to params

		router.push(`/${search}/`);
	};

	return (
		<form
			className="w-50 flex justify-center md:justify-between"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="bg-white p-2 w-80 text-xl rounded-xl"
				placeholder="Search"
			/>
			<button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
				🚀
			</button>
		</form>
	);
};

export default Search;
