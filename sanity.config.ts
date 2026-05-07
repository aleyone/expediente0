import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { episodeSchema, expedienteSchema, eventoSchema } from './sanity/schemas'

export default defineConfig({
  name: 'expediente0-studio',
  title: 'El Expediente 0 — Studio',
  projectId: '6gmbdo45',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [episodeSchema, expedienteSchema, eventoSchema],
  },
})
