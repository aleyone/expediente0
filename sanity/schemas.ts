import { defineType, defineField } from 'sanity'

export const episodeSchema = defineType({
  name: 'episode',
  title: 'Episodio de Podcast',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'number' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'duration', title: 'Duración', type: 'string' }),
    defineField({ name: 'ivooxUrl', title: 'URL de iVoox', type: 'url' }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime' }),
    defineField({
      name: 'section',
      title: 'Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Inexplicable', value: 'inexplicable' },
          { title: 'Archivo Histórico', value: 'archivo' },
          { title: 'Hemeroteca Negra', value: 'hemeroteca' },
          { title: 'Contracultural', value: 'contracultural' },
        ],
      },
    }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Más reciente', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})

export const expedienteSchema = defineType({
  name: 'expediente',
  title: 'Expediente',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Número de Expediente', type: 'number' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', title: 'Extracto', type: 'text' }),
    defineField({ name: 'body', title: 'Contenido', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime' }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Misterio', value: 'misterio' },
          { title: 'Historia', value: 'historia' },
          { title: 'True Crime', value: 'truecrime' },
          { title: 'Arte', value: 'arte' },
          { title: 'OVNI', value: 'ovni' },
        ],
      },
    }),
  ],
})

export const eventoSchema = defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'date', title: 'Fecha', type: 'datetime' }),
    defineField({ name: 'location', title: 'Lugar', type: 'string' }),
    defineField({ name: 'ticketsUrl', title: 'URL de entradas', type: 'url' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'sold_out', title: 'Agotado', type: 'boolean' }),
  ],
})
