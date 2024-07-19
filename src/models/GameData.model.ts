import type { Roles } from '@/enums/roles.enum';
import type { UUID } from 'crypto';

export interface GameData {
    id: UUID;
    title: string;
    imageUrl?: string;
    owner: {
        id: UUID;
        username: string;
        role: Roles;
    };
}
