export interface Game{
    appId: number;
    name: string;
    playtimeMinutes: number;
    genre: string;
    imageUrl: string;
    lastPlayed?: number;
}