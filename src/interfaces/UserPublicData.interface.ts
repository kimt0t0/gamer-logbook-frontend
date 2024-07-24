import type { Roles } from '@/enums/roles.enum';
import type { UUID } from 'crypto';

export interface UserPublicData {
    id: UUID;
    username: string;
    role: Roles;
}
