import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // Return an empty array if I don't have
  return [results?.data?.breeds ?? [], results.status];
}
