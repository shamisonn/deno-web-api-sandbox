import { assertEquals } from 'https://deno.land/std@0.116.0/testing/asserts.ts';
import { TwitterId } from '@/domain/twitter.id.ts';
import { TwitterRepositoryImpl } from './repository.impl.ts';

Deno.test('TwitterRepositoryImpl　getUserInfoById', async () => {
  const repo = new TwitterRepositoryImpl();
  const dto = await repo.getUserInfoById(new TwitterId('shamisonn'));
  assertEquals(dto, {
    id: new TwitterId('shamisonn'),
    name: 'しゃみそん',
    iconUrl: 'https://twitter.jp/shamisonn.png',
  });
});
