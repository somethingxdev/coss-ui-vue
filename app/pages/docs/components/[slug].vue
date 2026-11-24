<script setup lang="ts">
import { ExternalLinkIcon } from '@lucide/vue'
import { computedAsync, useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { ContentRenderer, NuxtLink } from '#components'
import { createError, definePageMeta, queryCollection, useAsyncData, useRoute, useSeoMeta } from '#imports'
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '../../../components/ui/accordion'
import { Button } from '../../../components/ui/button'
import { Tabs, TabsList, TabsPanel, TabsTab } from '../../../components/ui/tabs'
import CodeBlock from '../../../site/CodeBlock.vue'
import ComponentPreview from '../../../site/ComponentPreview.vue'
import { componentDocs } from '../../../site/docs'
import DocsPage from '../../../site/DocsPage.vue'
import MarkdownCode from '../../../site/MarkdownCode.vue'

import { componentDependencies, loadComponentFiles, packageDependencies } from '../../../site/registry'

definePageMeta({
  key: route => route.path,
})

const route = useRoute()
const slug = String(route.params.slug)
const doc = componentDocs.find(item => item.slug === slug)
if (!doc)
  throw createError({ statusCode: 404, statusMessage: 'Component not found' })

const { data: page, error } = await useAsyncData(`component-${slug}`, () => queryCollection('docs').path(`/docs/components/${slug}`).first())
if (error.value)
  throw error.value
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Component documentation not found' })

useSeoMeta({ title: `${doc.title} · coss ui for Vue`, description: doc.description })

const vaseUrl = doc.vase === false
  ? undefined
  : `https://vase-ui.com/components/${doc.vase ?? slug}`
const cossUrl = doc.coss
  ? `https://coss.com/ui/docs/components/${slug}`
  : undefined
const files = computedAsync(() => loadComponentFiles(slug), [])
const installMethod = useLocalStorage<'cli' | 'manual'>('install-method', 'cli', { initOnMounted: true })
const cliCommand = `npx shadcn-vue@latest add @cossui-vue/${slug}`
const installCommand = computed(() => `pnpm add ${[
  'cn',
  ...packageDependencies(files.value),
].join(' ')}`)
const usedComponents = computed(() => componentDependencies(slug, files.value)
  .map(name => componentDocs.find(item => item.slug === name))
  .filter(item => item !== undefined))

const toc = computed(() => [
  { id: 'installation', title: 'Installation', depth: 2 },
  ...(page.value?.body.toc?.links ?? []).flatMap(link => [
    link,
    ...(link.children ?? []),
  ]).map(link => ({ id: link.id, title: link.text, depth: link.depth })),
])
const markdownComponents = { 'component-preview': ComponentPreview, 'pre': MarkdownCode }
</script>

<template>
  <DocsPage
    :key="doc.slug"
    :title="doc.title"
    :description="doc.description"
    :toc="toc"
  >
    <template #actions>
      <Button
        v-if="vaseUrl"
        as="a"
        :href="vaseUrl"
        target="_blank"
        rel="noreferrer"
        size="xs"
        variant="outline"
      >
        <ExternalLinkIcon />
        API Reference
      </Button>
      <Button
        v-if="cossUrl"
        as="a"
        :href="cossUrl"
        target="_blank"
        rel="noreferrer"
        size="xs"
        variant="outline"
      >
        <ExternalLinkIcon />
        coss ui (React)
      </Button>
    </template>

    <ComponentPreview v-if="page?.preview" :name="page.preview" />

    <section class="flex flex-col gap-4">
      <h2 id="installation" class="scroll-m-20 font-heading font-semibold text-xl">
        Installation
      </h2>
      <Tabs v-model="installMethod">
        <TabsList variant="underline">
          <TabsTab value="cli">
            CLI
          </TabsTab>
          <TabsTab value="manual">
            Manual
          </TabsTab>
        </TabsList>
        <TabsPanel value="cli" class="flex flex-col gap-4 pt-2">
          <CodeBlock :code="cliCommand" lang="bash" />
          <p class="text-muted-foreground text-sm">
            The CLI also adds the components this one uses and their packages. Register the
            <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-foreground">@cossui-vue</code> namespace once, as
            <NuxtLink to="/docs/get-started" class="font-medium text-foreground underline underline-offset-4">Get Started</NuxtLink>
            shows.
          </p>
        </TabsPanel>
        <TabsPanel value="manual" class="flex flex-col gap-4 pt-2">
          <p class="text-muted-foreground">
            Install the dependencies:
          </p>
          <CodeBlock :code="installCommand" lang="bash" />
          <p v-if="usedComponents.length" class="text-muted-foreground">
            It uses
            <span v-for="item in usedComponents" :key="item.slug" class="after:content-[',_'] last:after:content-['.']">
              <NuxtLink :to="`/docs/components/${item.slug}`" class="font-medium text-foreground underline underline-offset-4">{{ item.title }}</NuxtLink>
            </span>
            Add those first.
          </p>
          <p class="text-muted-foreground">
            Copy these files into <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-foreground text-sm">src/components/ui/{{ slug }}/</code>:
          </p>
          <Accordion class="rounded-xl border px-4">
            <AccordionItem v-for="file in files" :key="file.name" :value="file.name">
              <AccordionTrigger class="font-mono text-sm">
                {{ file.name }}
              </AccordionTrigger>
              <AccordionPanel>
                <CodeBlock :code="file.code" :lang="file.name.endsWith('.ts') ? 'ts' : 'vue'" class="[&>div]:max-h-[420px]" />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </TabsPanel>
      </Tabs>
    </section>

    <ContentRenderer v-if="page" :value="page" :components="markdownComponents" class="docs-prose mt-12" />
  </DocsPage>
</template>
