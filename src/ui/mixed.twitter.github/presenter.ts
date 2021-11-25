import { Result } from '@/ui/view.ts';
import { MixedTwitterGithubView } from '@/ui/mixed.twitter.github/view.ts';

export class MixedTwitterGithubPresenter {
  index(): Result<MixedTwitterGithubView> {
    return {
      status: 200,
      value: {
        message: 'mixed',
      },
    };
  }
}
