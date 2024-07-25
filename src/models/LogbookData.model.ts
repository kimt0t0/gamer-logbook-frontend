import type { UUID } from 'crypto';

export interface LogbookData {
    title: string;
    contents: any;
    gameId?: UUID;
    gameTitle?: string;
}
