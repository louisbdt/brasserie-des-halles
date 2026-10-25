import TextField from './TextField'

export default {
  title: 'Composants/TextField',
  component: TextField,
  args: { onChange: () => {} },
}

export const Empty = {
  args: { id: 'story-name', label: 'Nom', type: 'text', value: '' },
}

export const Filled = {
  args: { id: 'story-name-filled', label: 'Nom', type: 'text', value: 'Camille Dupont' },
}

export const Error = {
  args: {
    id: 'story-phone-error',
    label: 'Téléphone',
    type: 'tel',
    value: '06 12',
    error: 'Numéro de téléphone invalide, par exemple 06 12 34 56 78.',
  },
}

export const Disabled = {
  args: { id: 'story-name-disabled', label: 'Nom', type: 'text', value: '', disabled: true },
}

export const Focus = {
  args: { id: 'story-name-focus', label: 'Nom', type: 'text', value: '' },
  play: async ({ canvasElement }) => {
    canvasElement.querySelector('input')?.focus()
  },
}
