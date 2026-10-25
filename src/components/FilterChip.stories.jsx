import FilterChip from './FilterChip'

export default {
  title: 'Composants/FilterChip',
  component: FilterChip,
}

export const Inactive = {
  args: { label: 'Entrées', active: false },
}

export const Active = {
  args: { label: 'Entrées', active: true },
}

export const LongLabel = {
  args: { label: 'sans gluten et sans lactose', active: false },
}

export const Focus = {
  args: { label: 'Entrées', active: false },
  play: async ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}
