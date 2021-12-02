import { Result } from '@/ui/view.ts';
import { TwitterNameAndGihubRepositoriesView } from '@/ui/twitter.name.and.github.repositories/view.ts';
import { OutputDto } from '@/usecase/twitter.name.and.github.repositories/usecase.ts';

export class TwitterNameAndGihubRepositoriesPresenter {
  index(output: OutputDto): Result<TwitterNameAndGihubRepositoriesView> {
    return {
      status: 200,
      value: {
        twitter: {
          name: output.twitterName,
        },
        github: {
          repositories: output.githubRepositories.map((o) => {
            return {
              url: o,
            };
          }),
        },
      },
    };
  }
}
