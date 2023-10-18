import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/quickstart',
    name: 'Klever Wallet',
    description: 'How to integrate with Klever Wallet browser.',
  },
  {
    href: '/transfer',
    name: 'Transfer',
    description: 'How to transfer with Klever Blockchain.',
  },
  {
    href: '/errors',
    name: 'NFT',
    description:
      'How to create a NFT.',
  },
  {
    href: '/create-token',
    name: 'Create Token',
    description:
      'How to create a token with Klever Blockchain.',
  },
]

// RESOURCES
// Account Permission
// Validator
// Multisignature
// Staking


// página sdks colocar os nossos --> https://github.com/klever-io/klever-next-example  / https://github.com/klever-io/klever-svelte-example / https://github.com/klever-io/klever-vanilla-example
// arrumar links internos
// i18n depois


// section KleverChain SDK --> Klever SDK
// section Klever Finance --> Klever Blockchain

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
