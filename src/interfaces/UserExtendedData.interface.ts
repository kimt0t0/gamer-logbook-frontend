import type { Roles } from '@/enums/roles.enum';
import type { GameData } from '@/models/GameData.model';
import type { LogbookData } from '@/models/LogbookData.model';
import type { UUID } from 'crypto';

export interface UserExtendedData {
    id: UUID;
    username: string;
    role: Roles;
    games?: GameData[];
    logbooks?: LogbookData[];
}
