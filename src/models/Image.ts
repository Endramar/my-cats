import { Favourite } from "./Favourite";
import { Vote } from "./Vote";

export class Image {
    id: string;
    url: string;
    width: number;
    height: number;
    favouriteData: Favourite;
    votes: Vote[];
}