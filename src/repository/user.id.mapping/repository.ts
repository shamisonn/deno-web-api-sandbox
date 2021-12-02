import { UserId } from '@/domain/user.id.ts';
import {
  MappingUserIdToGithubIdRepositoryDto,
  MappingUserIdToTwitterIdRepositoryDto,
} from '@/repository/user.id.mapping/dto.ts';

export interface UserIdMappingRepository {
  getTwitterId(
    id: UserId,
  ): Promise<MappingUserIdToTwitterIdRepositoryDto>;

  getGithubId(
    id: UserId,
  ): Promise<MappingUserIdToGithubIdRepositoryDto>;
}
