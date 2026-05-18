"use client";

import {
    useEffect,
    useState,
} from "react";

import { useSession } from "next-auth/react";

import MovieCard from "./MovieCard";

export default function RecentMovies() {
    const { data: session } =
        useSession();

    const [movies, setMovies] =
        useState<any[]>([]);

    useEffect(() => {
        if (session?.user?.email) {
            fetch(
                `/api/recent?email=${session.user.email}`
            )
                .then((res) => res.json())
                .then((data) =>
                    setMovies(data)
                );
        }
    }, [session]);

    if (movies.length === 0)
        return null;

    return (
        <div className="px-6 mt-10">

            <h1 className="text-3xl font-bold mb-6 text-white">
                Recently Watched
            </h1>

            <div className="flex gap-4 overflow-x-scroll">

                {movies.map((movie) => (
                    <div
                        key={movie._id}
                        className="min-w-[250px] max-w-[250px]"
                    >
                        <MovieCard
                            movie={{
                                id: movie.movieId,

                                title: movie.title,

                                poster_path:
                                    movie.poster,

                                vote_average: 8.5,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}