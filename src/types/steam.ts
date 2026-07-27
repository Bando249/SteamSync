export interface SteamOwnedGameResponse{
    appid: number;
    name?: string;
    playtime_forever: number;
    playtime_2weeks?: number;
    img_icon_url?: string;
    rtime_last_played?: number;
}