<script setup lang="ts">
import { shallowRef, useId } from 'vue'
import { Button } from '../components/ui/button'
import { Form } from '../components/ui/form'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

const loading = shallowRef(false)
const id = useId()

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Message: ${String(formData.get('message') ?? '')}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <div class="flex flex-col gap-2">
      <Label :for="id">Message</Label>
      <Textarea :id="id" name="message" placeholder="Type your message here" required />
    </div>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
