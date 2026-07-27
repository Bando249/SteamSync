import type { Game } from "./game";

export interface User{
    id: string;
    steamId: string;
    displayName: string;
    avatarUrl: string;
    games: Game[];
}